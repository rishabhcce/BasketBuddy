const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    w: { type: String, required: true, trim: true },
    p: { type: Number, required: true, min: 0 },
    mrp: { type: Number, required: true, min: 0 },
    disc: { type: Number, default: 0, min: 0 },
    cat: { type: [String], default: ["all"] },
    badge: { type: String, default: "" },
    rating: { type: Number, default: 4.5, min: 0, max: 5 },
    rev: { type: Number, default: 0, min: 0 },
    image: { type: String, default: "" },
    description: { type: String, default: "" },
    quantity_in_stock: { type: Number, required: true, min: 0 },
    low_stock_threshold: { type: Number, required: true, min: 0, default: 20 },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
