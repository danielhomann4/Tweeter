var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

var db = require("./Models");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./Routes/htmlRoutes")(app);
require("./Routes/apiRoutes")(app);
require("./Routes/post-api-routes.js")(app);

// listen on port 3000
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
