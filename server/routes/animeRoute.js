const express = require("express");
const {
  getAllAnime,
  getSingleAnime,
  createAnime,
  updateAnime,
  deleteAnime,
} = require("../controllers/animeController");
const router = express.Router();

router.get("/", getAllAnime);

router.get("/:id", getSingleAnime);

router.post("/", createAnime);

router.patch("/:id", updateAnime);

router.delete("/:id", deleteAnime);

module.exports = router;
