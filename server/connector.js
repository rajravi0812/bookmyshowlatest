const mongodb = require("mongodb");
require('dotenv').config();

const mongoURI = process.env.MONGO_DB_SERVER;
let mongoose = require("mongoose");
const { bookMovieSchema } = require("./schema"); 

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection established with mongodb server online");
  })
  .catch((err) => {
    console.log("error while connection", err);
  }); 

let collection_connection = mongoose.model("bookmovietickets", bookMovieSchema);

exports.connection = collection_connection;
