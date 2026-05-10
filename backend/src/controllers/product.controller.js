const productModel = require("../models/product.model");

// route POST /api/products
// Create New Product
// access Admin
async function addProduct(req, res) {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = await productModel.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
}

module.exports = {
  addProduct,
};
