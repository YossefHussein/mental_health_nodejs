const express = require('express')
const songRouter = require("./adapters/routes/songs_routes");
const meditationRouter = require("./adapters/routes/meditation_routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express()
const port = process.env.port;

app.use('/meditation', meditationRouter)
app.use('/songs', songRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})