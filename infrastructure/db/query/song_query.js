const db = require("../index");

// get the song from songs table
const getAllSong = async () => {
  // select all thing from songs
  const result = await db.query("SELECT * FROM songs");
  // return the row of database
  return result.rows;
};

module.exports = { getAllSong };
