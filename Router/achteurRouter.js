const acheteurcontroller = require("../Controllers/acheteurController");
const route = require("express").Router();

route.post("/ajouteracheteur", acheteurcontroller.ajouteracheteur);
route.get("/getall", acheteurcontroller.getall);
route.get("/getbyid/:id", acheteurcontroller.getbyid);
route.delete("/delete/:id", acheteurcontroller.delete);
route.put("/update/:id", acheteurcontroller.update);

module.exports = route;