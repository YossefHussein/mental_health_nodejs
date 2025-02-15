const express = require("express");

const SongController = require("../controllers/meditation_classes_controller");

const router = express.Router();

router.get("/allClasses", SongController.allClasses);

module.exports = router;
