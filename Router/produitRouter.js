const produitcontroller = require("../Controllers/produitController");
const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: __dirname + "uploads/images" });

router.post(
  "/ajouterProduit",
  upload.single("image"),
  produitcontroller.ajouterProduit
);
router.get("/getall", produitcontroller.gettall);
router.get("/getone/:id", produitcontroller.getbyid);
router.delete("/delete/:id", produitcontroller.deleteproduit);
router.put("/update/:id", produitcontroller.updateproduit);
router.get("/getfile/:image", produitcontroller.getFile);

module.exports = router;
