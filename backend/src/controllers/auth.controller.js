const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  const { name, email, password } = req.body;

  const isUser = await userModel.findOne({ email });
  if (isUser) {
    return res.json({
      message: "User already exist",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const user = await userModel.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
}

module.exports = { registerUser };
