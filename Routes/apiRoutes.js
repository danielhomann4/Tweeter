const db = require("../Models");
const userData = require("../Data/userData");


module.exports = function(app) {
    app.get("/signUp/api/users", function(req, res) {
        res.json(userData);
    });
  
    app.post("/signUp/api/users", function(req, res) {
        
      });

  };
  