//jshint esversion:6

// REQS \\
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const ejsLint = require('ejs-lint');

// App Init \\
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// Static Directory 
app.use(express.static("public"));
// EJS
app.set('view engine', 'ejs');

// Vars \\
let items = ["Buy Food", "Cook Food", "Eat Food"];

// ROUTING \\
app.get("/", (req, res) => {

  // Logic to test if current day is a weekend day
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", (req, res) => {
  // Reset item var to inputted value
  let item = req.body.newItem;
  // Append new inputed items to items array
  items.push(item);
  // Redirects to .get("/") to render
  res.redirect("/");
});

// Server Port \\
app.listen(3000, () => {
  console.log("Server's a spinnin' on Port 3000!");
});
