const express = require("express");
const adminController = require("../controllers/adminController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/overview", protect, restrictTo("admin"), adminController.getOverview);

module.exports = router;
