function triggerLowStockAlert(product) {
  const alert = {
    productId: product.id,
    productName: product.name,
    quantity_in_stock: product.quantity_in_stock,
    low_stock_threshold: product.low_stock_threshold,
    triggeredAt: new Date().toISOString(),
    message: `${product.name} is low on stock`
  };

  console.warn(
    `[LOW_STOCK_ALERT] ${alert.productName} stock=${alert.quantity_in_stock} threshold=${alert.low_stock_threshold}`
  );

  return alert;
}

function evaluateLowStock(product) {
  if (product.quantity_in_stock <= product.low_stock_threshold) {
    return triggerLowStockAlert(product);
  }
  return null;
}

module.exports = { evaluateLowStock };
