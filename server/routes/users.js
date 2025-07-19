var express = require("express");
var router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/authMiddleware");

router.post("/signup", async (req, res) => {
  try {
    const { email, password, repassword } = req.body;
    if (!(email && password)) {
      return res.status(400).json({ message: "All fields are compulsory" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(402).json({ message: "Email already exists" });
    }

    if (!(password == repassword)) {
      return res.status(401).json({ message: "Passwords do not match" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      email,
      password: encryptedPassword,
    });
    const token = jwt.sign({ id: createdUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res
      .status(200)
      .cookie("token", token, options)
      .json({
        token,
        createdUser: { id: createdUser._id, email: createdUser.email },
      });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json({ message: "All fields are compulsory" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    if (password && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res
        .status(200)
        .cookie("token", token, options)
        .json({
          success: true,
          message: "Login successful",
          token,
          user: {
            id: user._id,
            email: user.email,
          },
        });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/logout", verifyToken, (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out" });
});

module.exports = router;
