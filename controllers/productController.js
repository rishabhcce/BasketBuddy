const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");
const { mapProductToFrontend } = require("../utils/productMapper");

exports.getProducts = asyncHandler(async (req, res) => {
  const query = (req.query.q || "").trim();
  const category = (req.query.category || "").trim().toLowerCase();
  const filter = { isActive: true };

  if (query) filter.name = { $regex: query, $options: "i" };
  if (category && category !== "all") filter.cat = category;

  const products = await Product.find(filter).sort({ id: 1 });
  res.json({ products: products.map(mapProductToFrontend) });
});

exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ id: Number(req.params.id), isActive: true });
  if (!product) throw new AppError("Product not found", 404);
  res.json({ product: mapProductToFrontend(product) });
});

exports.createProduct = asyncHandler(async (req, res) => {
  const payload = req.body;
  if (!payload.id || !payload.name) throw new AppError("Product id and name are required", 400);
  if (await Product.findOne({ id: payload.id })) throw new AppError("Product id already exists", 409);

  const product = await Product.create(payload);
  res.status(201).json({ message: "Inventory item created successfully", product: mapProductToFrontend(product) });
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOneAndUpdate({ id: Number(req.params.id) }, req.body, {
    new: true,
    runValidators: true
  });
  if (!product) throw new AppError("Product not found", 404);
  res.json({ message: "Inventory item updated successfully", product: mapProductToFrontend(product) });
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOneAndDelete({ id: Number(req.params.id) });
  if (!product) throw new AppError("Product not found", 404);
  res.json({ message: "Inventory item deleted successfully" });
});
