const Product = require("../models/Product");
const Order = require("../models/Order");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");
const { evaluateLowStock } = require("../utils/stockAlert");

function generateOrderId() {
  return `BB${Math.floor(100000 + Math.random() * 900000)}`;
}

function calculatePricing(items) {
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const deliveryFee = subtotal >= 599 ? 0 : 40;
  const discount = subtotal >= 999 ? 50 : subtotal >= 399 ? 20 : 0;
  const total = Math.max(0, subtotal + deliveryFee - discount);
  return { subtotal, deliveryFee, discount, total };
}

exports.createOrder = asyncHandler(async (req, res) => {
  const { customerName, email, address, addressType, phone, pincode, items = [], paymentMethod, slot } = req.body;
  if (!customerName || !email || !address || !phone || !pincode || !Array.isArray(items) || items.length === 0) {
    throw new AppError("Missing order details", 400);
  }

  const orderItems = [];
  const lowStockAlerts = [];

  for (const entry of items) {
    const product = await Product.findOne({ id: Number(entry.productId), isActive: true });
    const quantity = Math.max(1, Number(entry.quantity || 1));

    if (!product) throw new AppError(`Invalid product ${entry.productId}`, 400);
    if (product.quantity_in_stock < quantity) throw new AppError(`${product.name} is out of stock`, 400);

    product.quantity_in_stock -= quantity;
    const lowStockAlert = evaluateLowStock(product);
    await product.save();
    if (lowStockAlert) lowStockAlerts.push(lowStockAlert);

    orderItems.push({
      product: product._id,
      productId: product.id,
      name: product.name,
      quantity,
      unitPrice: product.p,
      lineTotal: product.p * quantity
    });
  }

  const pricing = calculatePricing(orderItems);
  const order = await Order.create({
    orderId: generateOrderId(),
    user: req.user._id,
    customerName,
    email: email.toLowerCase(),
    address,
    addressType: addressType || "home",
    phone,
    pincode,
    paymentMethod: paymentMethod || "cod",
    slot: slot || "",
    status: "confirmed",
    items: orderItems,
    ...pricing,
    lowStockAlerts
  });

  res.status(201).json({
    message: "Order placed successfully",
    order: {
      id: order.orderId,
      customerName: order.customerName,
      email: order.email,
      address: order.address,
      addressType: order.addressType,
      phone: order.phone,
      pincode: order.pincode,
      status: order.status,
      items: order.items,
      subtotal: order.subtotal,
      deliveryFee: order.deliveryFee,
      discount: order.discount,
      total: order.total,
      lowStockAlerts: order.lowStockAlerts,
      createdAt: order.createdAt
    }
  });
});

exports.getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 }).limit(20);
  res.json({
    orders: orders.map(order => ({
      id: order.orderId,
      customerName: order.customerName,
      phone: order.phone,
      status: order.status,
      items: order.items,
      subtotal: order.subtotal,
      deliveryFee: order.deliveryFee,
      discount: order.discount,
      total: order.total,
      createdAt: order.createdAt
    }))
  });
});
