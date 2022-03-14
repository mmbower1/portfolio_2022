// express
const express = require("express");
const router = express.Router();
// middleware
// const auth = require('../middleware/auth');
// mongo
const User = require("../models/userModel");
// npm's
// const bcrypt = require("bcryptjs");
// utils
const generateToken = require("../utils/generateToken");
const protect = require("../middleware/authMiddleware");

// const config = require('config');
// const { check, validationResult } = require('express-validator');

// @route    GET /users/me
// @desc     Get user data
// @access   Private
router.get("/me", protect, async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// @route    POST /users
// @desc     Register user
// @access   Public
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json("No name or email");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json("ERROR: Email already in use.");
  }
  // const salt = await bcrypt.genSalt(10);
  // const hashedPW = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("Invalid user data");
  }
});

// @route    Post /users/login
// @desc     Authenticate user
// @access   Public
router.post("/login", async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findOne({ name, email });
  if (user && name) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("Invalid credentials");
  }
});

module.exports = router;
