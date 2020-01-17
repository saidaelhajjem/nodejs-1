const acheteurmodel = require("../Models/Acheteur");

module.exports = {
  ajouteracheteur: function(req, res) {
    const acheteur = new acheteurmodel({
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      password: req.body.password,
      telephone: req.body.telephone,
      cin: req.body.cin
    });

    acheteur.save(function(err) {
      if (err) {
        res.json({
          state: "no",
          msg: "erreur"
        });
      } else {
        res.json({
          state: "ok",
          msg: "acheteur ajouté"
        });
      }
    });
  },
  getall: function(req, res) {
    acheteurmodel.find({}, function(err, list) {
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
  getbyid: function(req, res) {
    acheteurmodel.findOne(
      {
        _id: req.params.id
      },
      function(err, one) {
        if (err) {
          res.json({
            state: "no",
            msg: "erreur"
          });
        } else {
          res.json(one);
        }
      }
    );
  },
  delete: function(req, res) {
    acheteurmodel.deleteOne(
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
            msg: "acheteur supprimé"
          });
        }
      }
    );
  },
  update: function(req, res) {
    acheteurmodel.updateOne(
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
        telephone: req.body.telephone,
        cin: req.body.cin
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
            msg: "acheteur modifié"
          });
        }
      }
    );
  }
};
