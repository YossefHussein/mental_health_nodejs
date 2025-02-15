// this is import pg package and make Destructuring object and assign pg to pool
const { Pool } = require("pg");
// import the dotenv
const dotenv = require("dotenv");
// use the
dotenv.config();
// and this is configuration of database by pool object
const pool = new Pool({
  user: process.env.pgUser,
  password: process.env.pgPassword,
  host: process.env.pHost,
  port: process.env.pgPort,
  database: process.env.pgDataBase,
});

module.exports = {
  // this to make query from pool
  query: (text, params) => pool.query(text, params),
};
