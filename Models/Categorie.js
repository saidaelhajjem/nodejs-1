const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const categorieSchema = mongoose.model(
  "categorie",
  new mongoose.Schema({
    nom: {
      type: String,
      required: true,
      trim: true
    },
    sous_categorie: [
      { type: mongoose.Schema.Types.ObjectId, ref: "sous_categorie" }
    ]
  })
);

module.exports = categorieSchema;
