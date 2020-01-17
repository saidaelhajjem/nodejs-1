const roleModel = require('../Models/Role');

module.exports = {
    ajouterrole: function (req, res) {
        const role = new roleModel({
            nom: req.body.nom
        });
        role.save(function (err) {
            if (err) {
                res.json({
                    state: "no",
                    msg: "erreur"
                })
            } else {
                res.json({
                    state: "ok",
                    msg: "role ajouté"
                })
            }
        })
    },
    getall: function (req, res) {
        roleModel.find({}, function (err, list) {
            if (err) {
                res.json({
                    state: "no",
                    msg: "erreur"
                })
            } else {
                res.json(list)
            }
        })
    },
    getbyid: function (req, res) {
        roleModel.findOne({
            _id: req.params.id
        }, function (err, one) {
            if (err) {
                res.json({
                    state: "no",
                    msg: "erreur"
                })
            } else {
                res.json(one)
            }
        })
    },
    delete: function (req, res) {
        roleModel.deleteOne({
            _id: req.params.id
        }, function (err) {
            if (err) {
                res.json({
                    state: "no",
                    msg: "erreur"
                })
            } else {
                res.json({
                    state: "ok",
                    msg: "role supprimé"
                })
            }
        })
    },
    update: function (req, res) {
        roleModel.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            nom: req.body.nom
        }, function (err) {
            if (err) {
                res.json({
                    state: "no",
                    msg: "erreur"
                })
            } else {
                res.json({
                    state: "ok",
                    msg: "role modifié"
                })
            }
        })
    }


}