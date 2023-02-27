require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", true);
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/anime", require("./routes/animeRoute"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
