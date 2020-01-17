const categoriecontroller = require("../Controllers/categorieController");
const router = require("express").Router();

router.post("/ajoutercategorie", categoriecontroller.ajouterCategorie);
router.get("/getall", categoriecontroller.getall);
router.get("/:id", categoriecontroller.getbyid);
router.delete("/delete/:id", categoriecontroller.deletecategorie);
router.put("/update/:id", categoriecontroller.updatecategorie);
router.put("/push/:id", categoriecontroller.Push);

module.exports = router;
