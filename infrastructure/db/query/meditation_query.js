const db = require("../index");

// get the meditation information from table
const getAllMeditationClasses = async () => {
  // select all thing from meditation class table
  const result = await db.query("SELECT * FROM MeditationClasses");
  // return the row of database
  return result.rows;
};

module.exports = { getAllMeditationClasses };
