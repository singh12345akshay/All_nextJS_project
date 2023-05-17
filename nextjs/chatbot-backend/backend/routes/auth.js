const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "@#awkhfbb&$";
const fetchuser = require("../middleware/fetchuser");
// ROUTE:1  create a user using : POST "/api/auth". Doesn't require auth
router.post(
  "/createuser",
  [
    body("name", "Enter Valid Name").notEmpty(),
    body("email", "Enter Valid Email").notEmpty().isEmail(),
    body("password").notEmpty(),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ errors: "User already Exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      // .then(user => { res.json(user), console.log("Successfully added!"); });
      res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  }
);

// ROUTE:2 log in end point
router.post(
  "/login",
  [
    body("email", "Enter Valid Email").notEmpty().isEmail(),
    body("password").notEmpty(),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = await req.body;
    try {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your own origin domain
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Invalid credential" });
      }
      const passwordcompare = bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        return res.status(400).json({ error: "Invalid credential" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error occured");
    }
  }
);

//ROUTE:3 Get loggedin user detail using:POST "/api/auth/getuser"
router.post(
  "/getuser",
  fetchuser,
  async (req, res) => {
    try {
      userID = req.user.id;
      const user = await User.findById(userID).select("-password");
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error occured");
    }
  }
);
module.exports = router;
