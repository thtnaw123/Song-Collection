const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const SongRoutes = require("./routes/SongRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port} ...`);
});

app.use("/api/songs", SongRoutes);

// /api/songs/addsong

// /api/songs/updatesong

// /api/songs/deletesong

// /api/songs/getallsongs
