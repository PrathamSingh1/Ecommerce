const express = require("express");
const productController = require("../controllers/product.controller");
const { isAuthenticated } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", isAuthenticated, productController.addProduct);

module.exports = router;
