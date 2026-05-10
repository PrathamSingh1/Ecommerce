const express = require("express");
const productController = require("../controllers/product.controller");
const {
  adminMiddleware,
  userMiddleware,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", userMiddleware, adminMiddleware, productController.addProduct);
router.put(
  "/:id",
  userMiddleware,
  adminMiddleware,
  productController.updateProduct,
);
router.delete(
  "/:id",
  userMiddleware,
  adminMiddleware,
  productController.deleteProduct,
);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);

module.exports = router;
