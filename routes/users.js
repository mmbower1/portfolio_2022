// express
const express = require("express");
const router = express.Router();
// middleware
// const auth = require('../middleware/auth');
// mongo
const User = require("../models/userModel");
// npm's
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// @route    GET /users/me
// @desc     Get user data
// @access   Public
router.get("/me", async (req, res) => {
  try {
    res.json("users/me");
  } catch (err) {
    res.status(500).send(err + " Server error users/me");
  }
});

// @route    POST /users
// @desc     Register user
// @access   Public
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).json("No name or email");
    }
    res.json("Register user");
  } catch (err) {
    res.status(500).send(err + " Server error users");
  }
});

// @route    Post /users/login
// @desc     Authenticate user
// @access   Public
router.post("/login", async (req, res) => {
  try {
    res.json("Authenticate and login");
  } catch (err) {
    res.status(500).send(err + " Server error users/login");
  }
});

module.exports = router;
