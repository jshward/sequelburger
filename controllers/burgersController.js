var express = require("express");

var router = express.Router();
var db = require("../models");



router.get("/", function (req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll().then(function (burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    return res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/create", function (req, res) {
  // takes the request object using it as input for burger.addBurger
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    .then(function (results) {
      res.redirect("/");
    });
});

// put route -> back to index
router.put("/burgers/update", function (req, res) {
  db.Burger.update({
    devoured: true
  }, {
      where: { id: req.body.id }
    })
    .then(function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404.
        return res.status(404).end();
      } else {

        res.redirect("/");

      }
    })
});

module.exports = router;
