module.exports = {
    setUp : setUp
};

var ENV = process.env.ENV || "development";

function setUp(paths, app){
    paths.forEach(function(path){
      app.get(path, function(req, res, next){
        res.render("index", {ENV: ENV});
      });
    });
}