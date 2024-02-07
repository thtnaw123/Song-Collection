// const mongoose = require("mongoose");
const Joi = require("joi");
const SongModel = require("../model/SongModel");
const asyncHandler = require("express-async-handler");

// get songs list

const getAllSongs = asyncHandler(async (req, res) => {
  // console.log(req.user._id);
  const songs = await SongModel.find().sort({ createdAt: -1 });
  res.status(200).json(songs);
});

// add songs to collection

const AddSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.body;

  const songExists = await SongModel.findOne({ title: title, artist: artist });
  if (songExists) {
    res.status(401);
    throw new Error("Song already exists");
  }

  const validationResult = songValidation({ title, artist, album, genre });

  if (validationResult.error) {
    throw Error(validationResult.error.details[0].message);
  }

  const song = await SongModel.create({ title, artist, album, genre });

  if (song) {
    res.status(201).json(song);
  }
});

// update song
const updateSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre, id } = req.body;

  const song = await SongModel.findById(id);
  console.log(id);

  if (song) {
    const validationResult = songValidation({ title, artist, album, genre });
    if (validationResult.error) {
      throw Error(validationResult.error.details[0].message);
    }

    song.title = title || song.title;
    song.artist = artist || song.artist;
    song.album = album || song.album;
    song.genre = genre || song.genre;

    const updatedSong = await song.save();

    res.status(200).json({
      _id: _id,
      title: updatedSong.title,
      artist: updatedSong.artist,
      album: updatedSong.album,
      genre: updatedSong.genre,
    });
  } else {
    res.status(401);
    throw new Error("song not found");
  }
});

// get number of songs, albums, artist, genre

//delete song by id
const deleteSong = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such song" });
  }

  const targetSong = await SongModel.findOneAndDelete({ _id: id });

  if (!targetSong) {
    return res.status(400).json({ error: "no song with that id" });
  }
  res.status(200).json(targetSong);
});

const songValidation = (Inp) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    artist: Joi.string().required(),
    album: Joi.string().required(),
    genre: Joi.string().required(),
  });
  return schema.validate(Inp);
};

module.exports = { AddSong, updateSong, getAllSongs, deleteSong };
