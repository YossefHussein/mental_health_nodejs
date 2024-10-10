const express = require("express")

const SongController = require("../controllers/song_controller");

const router = express.Router()

router.get('/all', SongController.allSong)

module.exports = router