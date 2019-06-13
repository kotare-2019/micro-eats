const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.getRecipes().then(recipes => {
    var viewData = {
      recipes: recipes
    };
    db.getProfiles()
      .then(profiles  => {
        viewData.profiles = profiles;
        res.render("index", viewData);
      })
      .catch(err => {
        res.status(500).send("DATABASE ERROR: " + err.message);
      });
  });
});

router.get("/recipe/:id", (req, res, next) => {
  console.log(req.params.id);
  res.send("Recipe Route Working");
});

router.get("/profile/:id", (req, res, next) => {
  res.send("Profile Route Working");
});

router.get("/addprofile", (req, res) => {
  res.render("addProfile");
});

router.post("/addprofile", (req, res, next) => {
  if (req.body.name === "" || req.body.email === "" || req.body.bio === "") {
    return;
  } else {
    db.addUser("profiles", req.body).then(res.redirect("/"));
  }
});

module.exports = router;
