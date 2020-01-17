const produitModel = require("../Models/Produit");
var fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images" });

module.exports = {
  ajouterProduit: function(req, res) {
    var file = __dirname + "/uploads/images/" + req.file.originalname;
    fs.readFile(req.file.path, function(err, data) {
      fs.writeFile(file, data, function(err) {
        if (err) {
          res.json({
            msg: "errreur"
          });
        } else {
          const Produit = new produitModel({
            nom: req.body.nom,
            prix: req.body.prix,
            description: req.body.description,
            image: req.file.originalname
          });
          Produit.save(function(err) {
            if (err) {
              res.json({
                state: "no",
                msg: "vous avez un erreur"
              });
            } else {
              res.json({
                state: "ok",
                msg: "Produit ajouté"
              });
            }
          });
        }
      });
    });
  },
  gettall: function(req, res) {
    produitModel.find({}, function(err, list) {
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
    produitModel.findOne(
      {
        _id: req.params.id
      },
      function(err, pr) {
        if (err) {
          res.json({
            state: "no",
            msg: "erreur"
          });
        } else {
          res.json(pr);
        }
      }
    );
  },
  deleteproduit: function(req, res) {
    produitModel.deleteOne(
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
            msg: "produit supprimé"
          });
        }
      }
    );
  },
  updateproduit: function(req, res) {
    produitModel.updateOne(
      {
        _id: req.params.id
      },
      {
        $set: req.body
      },
      {
        nom: req.body.nom,
        prix: req.body.prix,
        description: req.body.description,
        image: req.body.image
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
            msg: "produit modifié"
          });
        }
      }
    );
  },

  getFile: function(req, res) {
    res.sendFile(__dirname + "/uploads/images/" + req.params.image);
  }
};
