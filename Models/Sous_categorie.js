const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const souscategorieSchema = mongoose.model(
  "sous_categorie",
  new mongoose.Schema({
    nom: {
      type: String,
      required: true,
      trim: true
    },

    produit: [{ type: mongoose.Schema.Types.ObjectId, ref: "produit" }]
  })
);

module.exports = souscategorieSchema;
