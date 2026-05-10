const express = require("express");
const productController = require("../controllers/product.controller");
const { userMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", userMiddleware, productController.addProduct);

module.exports = router;
