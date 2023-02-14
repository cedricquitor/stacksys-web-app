const express = require("express");
const router = express.Router();
const pool = require("../db");
const { v4: uuidv4 } = require("uuid");

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

// Add a new system
router.route("/").post(async (req, res) => {
  console.log(req.body);
  const id = uuidv4();
  const { user_email, title, progress } = req.body;
  try {
    pool.query(`INSERT INTO systems(id, user_email, title, progress) VALUES($1, $2, $3, $4)`, [id, user_email, title, progress]);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
