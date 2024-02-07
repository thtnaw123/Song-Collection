const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    genre: {
      type: String,
      require: true,
    },
    album: {
      type: String,
      require: true,
    },
    artist: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("SongModel", songSchema);
