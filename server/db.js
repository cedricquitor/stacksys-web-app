const Pool = require("pg").Pool;

require("dotenv").config();

const connectionString = process.env.RAILWAY_POSTGRES_CONNECTION_URL;

const pool = new Pool({
  connectionString,
});

module.exports = pool;
