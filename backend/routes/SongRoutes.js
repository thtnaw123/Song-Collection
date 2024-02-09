const express = require("express");
const {
  AddSong,
  updateSong,
  getAllSongs,
  deleteSong,
} = require("../controller/SongsController");
const router = express.Router();

router.post("/addsong", AddSong);

router.put("/updatesong", updateSong);

router.get("/getallsongs", getAllSongs);

router.delete("/deletesong/:id", deleteSong);

module.exports = router;

// get songs list

// get song by id

// get number of songs, albums, artist, genre
