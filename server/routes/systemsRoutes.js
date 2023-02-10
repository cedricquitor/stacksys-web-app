const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all systems
router.route("/:userEmail").get(async (req, res) => {
  console.log(req.params);
  const { userEmail } = req.params;
  try {
    const systems = await pool.query("SELECT * FROM systems WHERE user_email = $1", [userEmail]);
    res.status(200).json(systems.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
