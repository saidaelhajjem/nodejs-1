const userModel = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  ajouterUser: function(req, res) {
    const user = new userModel({
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    });
    user.save(function(err) {
      if (err) {
        res.json({
          state: "no",
          msg: "vous avez un erreur"
        });
      } else {
        res.json({
          state: "ok",
          msg: "utilisateur ajouté"
        });
      }
    });
  },

  getall: function(req, res) {
    userModel
      .find({})
      .populate("role")
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

  getone: function(req, res) {
    userModel
      .findOne({
        _id: req.params.id
      })
      .populate("role")
      .exec(function(err, u) {
        if (err) {
          res.json({
            state: "no",
            msg: "errrreur"
          });
        } else {
          res.json(u);
        }
      });
  },
  deleteuser: function(req, res) {
    userModel.deleteOne(
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
            msg: "user supprimé"
          });
        }
      }
    );
  },
  updateuser: function(req, res) {
    userModel.updateOne(
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
        password: req.body.password
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
            msg: "user modifié"
          });
        }
      }
    );
  },
  authentification: function(req, res) {
    userModel
      .findOne({ email: req.body.email })
      .populate("role")
      .exec(function(err, userInfo) {
        if (err) {
          console.log(err);
        } else {
          //COMPARER pss utilisateur bil pass token
          if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            const token = jwt.sign(
              { id: userInfo._id },
              req.app.get("secretKey"),
              { expiresIn: "1h" }
            );

            res.json({
              status: "success",
              message: "user found ",
              data: { user: userInfo, token: token }
            });
          } else {
            res.json({
              status: "error",
              message: "invalid email or password",
              data: null
            });
          }
        }
      });
  }
};
