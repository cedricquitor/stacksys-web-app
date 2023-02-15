const express = require("express");
const router = express.Router();
const pool = require("../db");
const { v4: uuidv4 } = require("uuid");

/**
 * Get all systems
 *
 * This function retrieves all systems belonging to a specified user email from a database table and sends the resulting rows as a JSON response to the client.
 *
 * @function
 * @async
 * @param {Object} req - The HTTP request object containing user email in URL parameter.
 * @param {Object} res - The HTTP response object with response status and message containing queried rows.
 * @returns {Object} - Returns HTTP response object with status and queried rows in the message.
 */
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

/**
 * Add a new system
 *
 * This function inserts a new system, along with system properties, into a database table and returns the resulting rows as a JSON response to the client.
 *
 * @function
 * @async
 * @param {Object} req - The HTTP request object containing system properties in the request body.
 * @param {Object} res - The HTTP response object with response status and message containing inserted rows.
 * @returns {Object} - Returns HTTP response object with status and inserted rows in the message.
 */
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

/**
 * Edit a system
 *
 * This function updates an existing system, along with its properties, in a database table and returns a JSON response to the client.
 *
 * @function
 * @async
 * @param {Object} req - The HTTP request object containing the system ID in URL parameter and system properties in the request body.
 * @param {Object} res - The HTTP response object with response status and message containing updated rows.
 * @returns {Object} - Returns HTTP response object with status and updated rows in the message.
 */
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

/**
 * Delete a system
 *
 * This function deletes a system from a database table using the provided ID and returns a JSON response to the client.
 *
 * @function
 * @async
 * @param {Object} req - The HTTP request object containing the system ID in URL parameter.
 * @param {Object} res - The HTTP response object with response status and message containing the number of rows deleted.
 * @returns {Object} - Returns HTTP response object with status and the number of rows deleted in the message.
 */
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
