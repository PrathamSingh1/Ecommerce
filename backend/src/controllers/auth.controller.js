const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

  const payload = { user: { id: user._id, role: user.role } };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "40h" },
    (err, token) => {
      if (err) throw err;

      res.status(201).json({
        message: "User registered successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
    },
  );
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const payload = { user: { id: user._id, role: user.role } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        res.json({
          message: "User Login successfully",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      },
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
}

module.exports = { registerUser, loginUser };
