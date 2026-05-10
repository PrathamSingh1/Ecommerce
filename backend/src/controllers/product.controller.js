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

// route PUT /api/product/:id
// update product
// access admin
// async function updateProduct(req, res) {
//   try {
//     const {
//       name,
//       description,
//       price,
//       discountPrice,
//       countInStock,
//       category,
//       brand,
//       sizes,
//       colors,
//       collections,
//       material,
//       gender,
//       images,
//       isFeatured,
//       isPublished,
//       tags,
//       dimensions,
//       weight,
//       sku,
//     } = req.body;

//     const id = req.params.id;
//     // find product by id
//     const product = await productModel.findById(id);

//     if (product) {
//       product.name = name || product.name;
//       product.description = description || product.description;
//       product.price = price || product.price;
//       product.discountPrice = discountPrice || product.discountPrice;
//       product.countInStock = countInStock || product.countInStock;
//       product.category = category || product.category;
//       product.brand = brand || product.brand;
//       product.sizes = sizes || product.sizes;
//       product.colors = colors || product.colors;
//       product.collections = collections || product.collections;
//       product.material = material || product.material;
//       product.gender = gender || product.gender;
//       product.images = images || product.images;
//       product.tags = tags || product.tags;
//       product.dimensions = dimensions || product.dimensions;
//       product.weight = weight || product.weight;
//       product.sku = sku || product.sku;

//       // booleans
//       product.isFeatured = isFeatured ?? product.isFeatured;

//       product.isPublished = isPublished ?? product.isPublished;

//       const updatedProduct = await product.save();

//       res.status(200).json({
//         message: "Product updated successfully",
//         updatedProduct,
//       });
//     } else {
//       res.status(404).json({
//         message: "Product not found",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// }

// route DELETE /api/products/:id
// delete product by id
// access admin
// async function deleteProduct(req, res) {
//   try {
//     // find the product by id
//     const id = req.params.id;

//     const product = await productModel.findById(id);

//     if (product) {
//       // remove from db
//       await product.deleteOne();
//       res.json({
//         message: "Product removed",
//       });
//     } else {
//       res.status(404).json({
//         message: "Product not found",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// }

async function 

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
};
