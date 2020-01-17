const mongoose = require("mongoose");
const user = require("./User");
const Schema = mongoose.Schema;
//const acheteurschema = mongoose.model(
const acheteurschema = user.discriminator(
  "acheteur",
  new mongoose.Schema({
    telephone: {
      type: String,
      required: true,
      trim: true
    },
    cin: {
      type: String,
      required: true,
      trim: true
    }
  })
);
module.exports = acheteurschema;
