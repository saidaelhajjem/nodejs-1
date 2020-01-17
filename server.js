const express = require("express");
const bodyParser = require("body-parser");

const db = require("./Models/db");

const userRouter = require("./Router/userRouter");
const produitRouter = require("./Router/produitRouter");
const categorieRouter = require("./Router/categorieRouter");
const souscategorieRouter = require("./Router/souscategorieRouter");
const roleRouter = require("./Router/roleRouter");
const vendeurRouter = require("./Router/vendeurRouter");
const acheteurRouter = require("./Router/achteurRouter");

const app = express(); //midelle ware /objet plusieurs méthodes/fonctions offre par express
//console.log(app);
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// dima taht instance
// parse application/json
app.use(bodyParser.json());

app.set("secretKey", "test");
app.use("/user", userRouter);
app.use("/produit", produitRouter);
app.use("/categorie", categorieRouter);
app.use("/souscategorie", souscategorieRouter);
app.use("/role", roleRouter);
app.use("/vendeur", vendeurRouter);
app.use("/acheteur", acheteurRouter);

app.listen(3050, function() {
  console.log("welcome");
});
