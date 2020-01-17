const souscategoriecontroller = require("../Controllers/souscategorieController");
const router = require("express").Router();

router.post(
  "/ajoutersouscategorie",
  souscategoriecontroller.ajoutersousCategorie
);
router.get("/getall", souscategoriecontroller.getall);
router.get("/getbyid/:id", souscategoriecontroller.getbyid);
router.delete("/delete/:id", souscategoriecontroller.deletesouscategorie);
router.put("/update/:id", souscategoriecontroller.updatesouscategorie);
router.put("/push/:id", souscategoriecontroller.Push);

module.exports = router;
