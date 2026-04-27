const express = require("express");
const productController = require("../controllers/productController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/", protect, restrictTo("admin"), productController.createProduct);
router.put("/:id", protect, restrictTo("admin"), productController.updateProduct);
router.delete("/:id", protect, restrictTo("admin"), productController.deleteProduct);

module.exports = router;
