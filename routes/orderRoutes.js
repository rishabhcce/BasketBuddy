const express = require("express");
const orderController = require("../controllers/orderController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, restrictTo("user"), orderController.createOrder);
router.get("/", protect, restrictTo("admin"), orderController.getOrders);

module.exports = router;
