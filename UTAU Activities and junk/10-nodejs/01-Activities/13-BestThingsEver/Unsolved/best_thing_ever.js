var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(error);
  }
  var output = data.split(",");
  for (var i = 0; i < output.length; i++) {
    console.log[i];
  }
});
