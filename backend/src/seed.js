require("dotenv").config();
const mongoose = require("mongoose");
const productModel = require("./models/product.model");
const userModel = require("./models/user.model");
const cartModel = require("./models/cart.model");
const products = require("./data/products");

// seeding data function
const seedData = async () => {
  try {
    // connect to db
    await mongoose.connect(process.env.MONGO_URI);

    // clear existing data
    await productModel.deleteMany();
    await userModel.deleteMany();

    // create a default admin user
    const createdUser = userModel.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    // assign the default user Id to each product
    const userID = (await createdUser)._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    // Insert product to the db
    await productModel.insertMany(sampleProducts);
    console.log("Product data seeded successfully");
    process.exit();
  } catch (error) {
    console.log("Error seeding the data:", error);
    process.exit(1);
  }
};

seedData();
