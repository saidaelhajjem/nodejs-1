const vendeurModel = require("../Models/vendeur");
var fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images" });

module.exports = {
  ajoutervendeur: function(req, res) {
    var file = __dirname + "/uploads/images" + req.file.originalname;
    fs.readFile(req.file.path, function(err, data) {
      fs.writeFile(file, data, function(err) {
        if (err) {
          res.json({ msg: "erreur" });
        } else {
          const vendeur = new vendeurModel({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: req.body.password,
            image: req.file.originalname
          });
          vendeur.save(function(err) {
            if (err) {
              res.json({
                state: "no",
                msg: "erreur"
              });
            } else {
              res.json({
                state: "ok",
                msg: "vendeur ajouté"
              });
            }
          });
        }
      });
    });
  },
  getall: function(req, res) {
    vendeurModel.find({}, function(err, list) {
      if (err) {
        res.json({
          state: "no",
          msg: "erreur"
        });
      } else {
        res.json(list);
      }
    });
  },
  getone: function(req, res) {
    vendeurModel.findOne(
      {
        _id: req.params.id
      },
      function(err, v) {
        if (err) {
          res.json({
            state: "no",
            msg: "erreur"
          });
        } else {
          res.json(v);
        }
      }
    );
  },
  delete: function(req, res) {
    vendeurModel.deleteOne(
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
            mse: "vendeur supprimé"
          });
        }
      }
    );
  },
  update: function(req, res) {
    vendeurModel.updateOne(
      {
        _id: req.params.id
      },
      {
        $set: req.body
      },
      {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password,
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
            msg: "vendeur modifié"
          });
        }
      }
    );
  }
};
