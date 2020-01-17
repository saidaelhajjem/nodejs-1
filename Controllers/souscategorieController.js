const souscategoriemodel = require("../Models/Sous_categorie");

module.exports = {
  ajoutersousCategorie: function(req, res) {
    const sous_categorie = new souscategoriemodel({
      nom: req.body.nom,
      produit: req.body.produit
    });
    sous_categorie.save(function(err) {
      if (err) {
        res.json({
          state: "no",
          msg: "vous avez un erreur"
        });
      } else {
        res.json({
          state: "ok",
          msg: "sous categorie ajouté"
        });
      }
    });
  },
  getall: function(req, res) {
    souscategoriemodel
      .find({})
      .populate("produit")
      .exec(function(err, list) {
        if (err) {
          res.json({
            state: "no",
            msg: "vous avez un erreur"
          });
        } else {
          res.json({
            list
          });
        }
      });
  },

  getbyid: function(req, res) {
    souscategoriemodel
      .findOne({
        _id: req.params.id
      })
      .populate("produit")
      .exec(function(err, pr) {
        if (err) {
          res.json({
            state: "no",
            msg: "erreur"
          });
        } else {
          res.json(pr);
        }
      });
  },
  deletesouscategorie: function(req, res) {
    souscategoriemodel.deleteOne(
      {
        _id: req.params.id
      },
      function(err) {
        if (err) {
          res.json({
            state: "no",
            msg: "erreur"
          });
        } else {
          res.json({
            state: "ok",
            msg: "sous catégorie supprimé"
          });
        }
      }
    );
  },
  updatesouscategorie: function(req, res) {
    souscategoriemodel.updateOne(
      {
        _id: req.params.id
      },
      {
        $set: req.body
      },
      {
        nom: req.body.nom
      },
      function(err) {
        if (err) {
          res.json({
            state: "no",
            msg: "erreur"
          });
        } else {
          res.json({
            state: "ok",
            msg: "sous catégorie modifié"
          });
        }
      }
    );
  },
  Push: function(req, res) {
    souscategoriemodel.updateOne(
      { _id: req.params.id },
      { $push: { produit: req.body.produit } },
      function(err) {
        if (err) {
          res.json({ state: " no ", msg: "ID not found" });
        } else {
          res.json({ state: "ok", msg: "Produit sous-categorie updated" });
        }
      }
    );
  }
};
