const express = require("express");
const router = express.Router();
const pool = require("../db");
const { v4: uuidv4 } = require("uuid");

// Get all systems
router.route("/:userEmail").get(async (req, res) => {
  console.log(req.params);
  const { userEmail } = req.params;
  try {
    const readSystems = await pool.query("SELECT * FROM systems WHERE user_email = $1;", [userEmail]);
    res.status(200).json(readSystems.rows);
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
    const createSystem = await pool.query("INSERT INTO systems(id, user_email, title, progress) VALUES($1, $2, $3, $4);", [id, user_email, title, progress]);
    res.status(201).json(createSystem);
  } catch (error) {
    console.error(error);
  }
});

// Edit a system
router.route("/:id").put(async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const { id } = req.params;
  const { user_email, title, progress, date } = req.body;
  try {
    const updateSystem = await pool.query("UPDATE systems SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;", [user_email, title, progress, date, id]);
    res.status(204).json(updateSystem);
  } catch (error) {
    console.error(error);
  }
});

// Delete a system
router.route(":/id").delete(async (res, req) => {
  const { id } = req.params;
  try {
    const deleteSystem = await pool.query("DELETE FROM systems WHERE id = $1;", [id]);
    res.status(204).json(deleteSystem);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
