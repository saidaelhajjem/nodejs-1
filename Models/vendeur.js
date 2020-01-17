const mongoose = require("mongoose");
const user = require("./User");

const Schema = mongoose.Schema;
//const vendeurSchema = mongoose.model(
const vendeurSchema = user.discriminator(
  "vendeur",
  new mongoose.Schema({
    image: {
      type: String
    }
  })
);
module.exports = vendeurSchema;
