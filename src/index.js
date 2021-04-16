/*
    module name:        index.js
    synopsis:           main entry point for the server.
                        Handles client requests.
*/



var express = require('express');
const mongoose = require("mongoose");
const path = require("path");


const InventoryItem = require("./models/inventoryItem.js");

var app = express();
const port = process.env.PORT || 4000;

app.set("views", __dirname + "/views");
  app.set("view-engine", "ejs");
  app.use(express.urlencoded({ extended: false })); // we wanna be able to access varaibles inside our posts reqs
  //app.use(express.static(path.join(__dirname, "views")));

  // middleware for public resources [css, images]
  app.use(express.static(path.join(__dirname, '/public')));
  app.use('/public',express.static('public'))
  app.use(express.json());





  app.get("/", (req, res) => {
    res.redirect("/landingPage");
  });

  app.get("/landingPage", (req, res) => {
    foodItem = "Delicious Botanical Corn"
    res.render("./inventory/inventory.ejs", {foodItem:foodItem});
  })





app.listen(port, () => {
  console.log("Listening on port " + port + "...");
});