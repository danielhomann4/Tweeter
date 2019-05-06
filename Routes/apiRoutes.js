const db = require("../Models");
const userData = require("../Data/userData");


module.exports = function(app) {
    app.get("/signUp/api/users", function(req, res) {
        res.json(userData);
    });
  
    // app.get("/api/authors/:id", function(req, res) {
    //   // Here we add an "include" property to our options in our findOne query
    //   // We set the value to an array of the models we want to include in a left outer join
    //   // In this case, just db.Post
    //   db.Author.findOne({
    //     where: {
    //       id: req.params.id
    //     },
    //     include: [db.Post]
    //   }).then(function(dbAuthor) {
    //     res.json(dbAuthor);
    //   });
    // });
  
    app.post("/signUp/api/users", function(req, res) {
        
      });
  
    // app.delete("/api/authors/:id", function(req, res) {
    //   db.Author.destroy({
    //     where: {
    //       id: req.params.id
    //     }
    //   }).then(function(dbAuthor) {
    //     res.json(dbAuthor);
    //   });
    // });
  
  };
  