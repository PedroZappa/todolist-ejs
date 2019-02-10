//jshint esversion:6

// REQS \\
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');

// App Init \\
const app = express();
// EJS
app.set('view engine', 'ejs');

// ROUTING \\
app.get("/", function(req, res) {

  // Logic to test if current day is a weekend day
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tueday";
      break;
    case 3:
      day = "Wednsday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
    console.log("Error, current day is equal to: " + currentDay);
  }
  // EJS printing method
  res.render("list", {
    kinfOfDay: day
  });
});

// Server Port \\
app.listen(3000, function() {
  console.log("Server's a spinnin' on Port 3000!");
});












// var today = new Date();
// var currentDay = today.getDay();
// var day = "";
// // Sunday - Saturday || 0 - 6
// if (currentDay === 6 || currentDay === 0) {
//   day = "Weekend";
// } else {
//   day = "Weekday";
// }
// // EJS printing method
// res.render("list", {
//   kinfOfDay: day
// });


// var today = new Date();
// var currentDay = today.getDay();
// var day = "";
// // Sunday - Saturday || 0 - 6
// if (currentDay === 0) {
//   day = "Sunday";
// } else if (currentDay === 1) {
//   day = "Monday";
// } else if (currentDay === 2) {
//   day = "Tuesday";
// } else if (currentDay === 3) {
//   day = "Wednesday";
// } else if (currentDay === 4) {
//   day = "Thursday";
// } else if (currentDay === 5) {
//   day = "Friday";
// } else if (currentDay === 6) {
//   day = "Saturday";
// }
// // EJS printing method
// res.render("list", {
//   kinfOfDay: day
// });
