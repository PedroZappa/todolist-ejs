//jshint esversion:6

// REQS \\
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const ejsLint = require('ejs-lint');
// Local/Custom REQS \\
const date = require(__dirname + "/date.js");

// App Init \\
// Express
const app = express();
// body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));
// Static Directory
app.use(express.static("public"));
// EJS
app.set('view engine', 'ejs');

// Arrays \\
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

// ROUTING \\
// Home \\
app.get("/", (req, res) => {
  const day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
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
