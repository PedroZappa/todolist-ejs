// jshint esversion:6


// Export code, allowing other scripts to access it by requiring date.js and the respective method to be engaged
// Allow functions inside date.js to be accessed externally
// you can only select one method at a time
// Writting only exports is shorthand for module.exports
exports.getDate = function() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
  const today = new Date();
  const options = {
    weekday: "long"
  };
  return today.toLocaleDateString("en-US", options);
};
