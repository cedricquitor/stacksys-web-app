const express = require("express");
const router = express.Router();
const pool = require("../db");
const { v4: uuidv4 } = require("uuid");

router.route("/").get(async (req, res) => {
  res.json("authRoutes/");
});

module.exports = router;
