const vendeurcontroller = require("../Controllers/vendeurController");
const route = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images" });

route.post(
  "/ajoutervendeur",
  upload.single("image"),
  vendeurcontroller.ajoutervendeur
);
route.get("/getall", vendeurcontroller.getall);
route.get("/getone/:id", vendeurcontroller.getone);
route.delete("/delete/:id", vendeurcontroller.delete);
route.put("/update/:id", vendeurcontroller.update);

module.exports = route;
