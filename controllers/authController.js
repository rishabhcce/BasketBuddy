const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");

function signToken(user) {
  return jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d"
  });
}

exports.userLogin = asyncHandler(async (req, res) => {
  const { identity, password } = req.body;
  if (!identity || !password) throw new AppError("Identity and password are required", 400);

  const user = await User.findOne({
    $or: [{ email: identity.toLowerCase() }, { phone: identity }]
  }).select("+password");

  if (!user || user.role !== "user" || !(await bcrypt.compare(password, user.password))) {
    throw new AppError("Invalid user credentials", 401);
  }

  res.json({
    message: "User logged in successfully",
    token: signToken(user),
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      role: user.role
    }
  });
});

exports.userSignup = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  if (!firstName || !email || !phone || !password || password.length < 8) {
    throw new AppError("Missing required signup fields", 400);
  }

  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new AppError("Email already registered", 409);
  }

  const user = await User.create({
    firstName,
    lastName,
    email: email.toLowerCase(),
    phone,
    password: await bcrypt.hash(password, 10),
    role: "user"
  });

  res.status(201).json({
    message: "Account created successfully",
    token: signToken(user),
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      role: user.role
    }
  });
});

exports.adminLogin = asyncHandler(async (req, res) => {
  const { email, password, accessCode } = req.body;
  const admin = await User.findOne({ email: email?.toLowerCase(), role: "admin" }).select("+password");

  if (
    !admin ||
    !(await bcrypt.compare(password || "", admin.password)) ||
    accessCode !== process.env.ADMIN_ACCESS_CODE
  ) {
    throw new AppError("Invalid admin credentials", 401);
  }

  res.json({
    message: "Admin logged in successfully",
    token: signToken(admin),
    admin: {
      id: admin._id,
      name: `${admin.firstName} ${admin.lastName}`.trim(),
      email: admin.email,
      role: admin.role
    }
  });
});
