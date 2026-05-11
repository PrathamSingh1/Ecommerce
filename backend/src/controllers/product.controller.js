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
async function updateProduct(req, res) {
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

    const id = req.params.id;
    // find product by id
    const product = await productModel.findById(id);

    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;

      // booleans
      product.isFeatured = isFeatured ?? product.isFeatured;

      product.isPublished = isPublished ?? product.isPublished;

      const updatedProduct = await product.save();

      res.status(200).json({
        message: "Product updated successfully",
        updatedProduct,
      });
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
}

// route DELETE /api/products/:id
// delete product by id
// access admin
async function deleteProduct(req, res) {
  try {
    // find the product by id
    const id = req.params.id;

    const product = await productModel.findById(id);

    if (product) {
      // remove from db
      await product.deleteOne();
      res.json({
        message: "Product removed",
      });
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
}

// route GET /api/products
// get all products with optional query filters
// access public
async function getProducts(req, res) {
  try {
    const {
      collection,
      size,
      color,
      gender,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      material,
      brand,
      limit,
    } = req.query;

    let query = {};

    if (collection && collection.toLocaleLowerCase() !== "all")
      query.collections = collection;
    if (category && category.toLocaleLowerCase() !== "all")
      query.category = category;
    if (material) query.material = { $in: material.split(",") };
    if (brand) query.brand = { $in: brand.split(",") };
    if (size) query.sizes = { $in: size.split(",") };
    if (color) query.colors = { $in: [color] };
    if (gender) query.gender = gender;

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice); // ✅ fixed typo
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // ✅ Build a Mongoose sort string/object and use it in the query chain
    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }

    // ✅ Use Mongoose's .sort() and .limit() instead of Array methods
    const products = await productModel
      .find(query)
      .sort(sort)
      .limit(Number(limit) || 0);

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
}

// route GET /api/products/:id
// get a single product by Id
// assess public
async function getProduct(req, res) {
  try {
    const product = await productModel.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: "Product Not Found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error ",
    });
  }
}

// route GET /api/products/similar/:id
// retrieve similar products based on the current product's gender and category
// access public
async function similarProducts(req, res) {
  const { id } = req.params;
  try {
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    const similarProducts = await productModel
      .find({
        _id: { $ne: id }, // exclude the current product id
        gender: product.gender,
        category: product.category,
      })
      .limit(4);

    res.json(similarProducts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProduct,
  similarProducts,
};
