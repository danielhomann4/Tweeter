var path = require("path");

module.exports = function(app){

    app.get("/signIn", function(req, res) {
        res.sendFile(path.join(__dirname, "../Public/index.html"));
      });
    
      app.get("/signUp", function(req, res) {
        res.sendFile(path.join(__dirname, "../Public/signup.html"));
      });
    
      // If no matching route is found default to home
      app.get("/profile", function(req, res) {
        res.sendFile(path.join(__dirname, "../Public/profile.html"));
      });
    };