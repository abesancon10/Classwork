// Core node package for reading and writing files
var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("movies.txt", "Inception, Die Hard, Stalag 17", function(err) {
//^ the where, the what, call back function
//parameter is the defintion; argument is 
  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("movies.txt was updated!");

});
