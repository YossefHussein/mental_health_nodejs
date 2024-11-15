// this is import pg package and make Destructuring object and assign pg to pool
const { Pool } = require("pg");

// and this is configuration of database by pool object
const pool = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "postgres",
});

module.exports = {
  // this to make query from pool
  query: (text, params) => pool.query(text, params),
};
