function mapProductToFrontend(productDoc) {
  const product = productDoc.toObject ? productDoc.toObject() : productDoc;
  return {
    id: product.id,
    name: product.name,
    w: product.w,
    p: product.p,
    mrp: product.mrp,
    disc: product.disc,
    cat: product.cat,
    badge: product.badge,
    rating: product.rating,
    rev: product.rev,
    img: product.image || "",
    stock: product.quantity_in_stock,
    quantity_in_stock: product.quantity_in_stock,
    low_stock_threshold: product.low_stock_threshold,
    image: product.image || ""
  };
}

module.exports = { mapProductToFrontend };
