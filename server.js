var express = require("express");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// listen on port 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
