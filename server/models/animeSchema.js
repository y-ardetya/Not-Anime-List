const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeSchema = new Schema(
  {
    title: {
      // title is a property
      type: String, // type is a property
      required: true, // required is a property
      unique: true, // unique is a property
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Anime", animeSchema);
