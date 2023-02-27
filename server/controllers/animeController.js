const Anime = require("../models/animeSchema");
const mongoose = require("mongoose");
//@description GET all data
//@route GET /api/blue
//@access Public
const getAllAnime = async (req, res) => {
  const anime = await Anime.find({}).sort({ createdAt: -1 });
  res.status(200).json(anime);
};

const getSingleAnime = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No anime with that id");
  const anime = await Anime.findById(id);
  res.status(200).json(anime);
};

const createAnime = async (req, res) => {
  const { title, description, rating, genre } = req.body;
  const anime = await Anime.create({ title, description, rating, genre });
  res.status(201).json(anime);
};

const updateAnime = async (req, res) => {
  const { id } = req.params;
  const { title, description, rating, genre } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No anime with that id");
  const anime = await Anime.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!anime) return res.status(404).send("No anime with that id");
  res.status(200).json(anime);
};

const deleteAnime = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No anime with that id");

  const anime = await Anime.findOneAndDelete({ _id: id });

  if (!anime) return res.status(404).send("No anime with that id");
  res.status(200).json(anime);
};

module.exports = {
  getAllAnime,
  getSingleAnime,
  createAnime,
  updateAnime,
  deleteAnime,
};
