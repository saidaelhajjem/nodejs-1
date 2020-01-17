const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const produitSchema = mongoose.model(
  "produit",
  new mongoose.Schema({
    nom: {
      type: String,
      required: true,
      trim: true
    },
    prix: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true
    }
  })
);

module.exports = produitSchema;
