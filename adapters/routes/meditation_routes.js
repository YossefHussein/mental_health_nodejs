const express = require("express");
const MeditationController = require("../controllers/meditation_controller");

const router = express.Router();

router.get("/dailyQuote", MeditationController.dailyQuote);
router.get("/myMood/:mood", MeditationController.myMood);

module.exports = router;
