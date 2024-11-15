// import dependencies
const express = require("express");
// import song routing
const songRouter = require("./adapters/routes/songs_routes");
// import meditation routing
const meditationRouter = require("./adapters/routes/meditation_routes");
// import the dotenv
const dotenv = require("dotenv");
// use the
dotenv.config();
// using the express
const app = express();
// app port
const PORT = process.env.PORT;
// make middleware from routing
app.use("/meditation", meditationRouter);
app.use("/songs", songRouter);
// run the app
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
