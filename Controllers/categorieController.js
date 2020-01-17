const categorieModel = require("../Models/Categorie");

module.exports = {
  ajouterCategorie: function(req, res) {
    const categorie = new categorieModel({
      nom: req.body.nom,
      sous_categorie: req.body.sous_categorie
    });
    categorie.save(function(err) {
      if (err) {
        res.json({
          state: "no",
          msg: "vous avez un erreur"
        });
      } else {
        res.json({
          state: "ok",
          msg: "categorie ajouté"
        });
      }
    });
  },
  getall: function(req, res) {
    categorieModel
      .find({})
      .populate({
        path: "sous_categorie",
        populate: {
          path: "produit"
        }
      })
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
    categorieModel
      .findOne({
        _id: req.params.id
      })
      .populate({
        path: "sous_categorie",
        populate: {
          path: "produit"
        }
      })
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

  deletecategorie: function(req, res) {
    categorieModel.deleteOne(
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
            msg: "catégorie supprimé"
          });
        }
      }
    );
  },
  updatecategorie: function(req, res) {
    categorieModel.updateOne(
      {
        _id: req.params.id
      },
      {
        $set: {
          nom: req.body.nom
        }
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
            msg: "catégorie modifié"
          });
        }
      }
    );
  },
  Push: function(req, res) {
    categorieModel.updateOne(
      { _id: req.params.id },
      { $push: { sous_categorie: req.body.sous_categorie } },
      function(err) {
        if (err) {
          res.json({ state: " no ", msg: "ID not found" });
        } else {
          res.json({ state: "ok", msg: "sous-categorie categorie updated" });
        }
      }
    );
  }
};
