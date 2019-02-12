//jshint esversion:6

// REQS \\
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const ejsLint = require('ejs-lint');

// App Init \\
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
// Static Directory
app.use(express.static("public"));
// EJS
app.set('view engine', 'ejs');

// Vars \\
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

// ROUTING \\
// Home \\
app.get("/", (req, res) => {

  // Logic to test if current day is a weekend day
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    workItems.push(item);
    res.redirect("/");
  }
});

// Work \\
app.get("/work", (req, res) => {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});



// Server Port \\
app.listen(3000, () => {
  console.log("Server's a spinnin' on Port 3000!");
});
