var config = require("../Configurations/Config");
const mongoose = require("mongoose");

const url = config.databaseUrl;
const connect = mongoose.connect(url);
connect.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.log(err);
  }
);
