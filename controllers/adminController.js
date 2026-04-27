const Order = require("../models/Order");
const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");

exports.getOverview = asyncHandler(async (req, res) => {
  const [recentOrders, products, orderCount] = await Promise.all([
    Order.find().sort({ createdAt: -1 }).limit(5),
    Product.find().sort({ id: 1 }),
    Order.countDocuments()
  ]);

  const revenue = recentOrders.reduce((sum, order) => sum + order.total, 0);
  const lowStock = products.filter(product => product.quantity_in_stock <= product.low_stock_threshold);

  res.json({
    metrics: {
      revenue,
      totalOrders: orderCount,
      totalProducts: products.length,
      lowStockCount: lowStock.length
    },
    recentOrders: recentOrders.map(order => ({
      id: order.orderId,
      customerName: order.customerName,
      phone: order.phone,
      status: order.status,
      total: order.total,
      createdAt: order.createdAt
    })),
    lowStock: lowStock.map(product => ({
      id: product.id,
      name: product.name,
      stock: product.quantity_in_stock,
      threshold: product.low_stock_threshold
    }))
  });
});
