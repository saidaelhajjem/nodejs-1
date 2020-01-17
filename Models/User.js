const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = mongoose.model(
  "user",
  new mongoose.Schema({
    nom: {
      type: String,
      required: true,
      trim: true
    },
    prenom: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "role" }
  }).pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  })
);

module.exports = userSchema;
