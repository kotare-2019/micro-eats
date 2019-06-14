const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.getRecipes().then(recipes => {
    var viewData = {
      recipes: recipes
    };
    db.getProfiles()
      .then(profiles => {
        viewData.profiles = profiles;
        // console.log(viewData);
        res.render("index", viewData);
      })
      .catch(err => {
        res.status(500).send("DATABASE ERROR: " + err.message);
      });
  });
});

router.get("/recipe/:id", (req, res, next) => {
  // console.log(req.params.id);
  res.send("Recipe Route Working");
});

router.get("/profile/:id", (req, res, next) => {
  db.getProfile(req.params.id).then(profile => {
    // console.log(profile);
    res.render("profile", { profile: profile });
  });
});

router.get("/profile/:id", (req, res, next) => {
  db.getProfile(req.params.id).then(profile => {
    console.log(profile);
    res.render("profile", { profile: profile });
  });
});

router.get("/addprofile", (req, res, next) => {
  res.render("addProfile");
});

router.post("/addprofile", (req, res, next) => {
  if (req.body.name === "" || req.body.email === "" || req.body.bio === "") {
    return;
  } else {
    db.addUser("profiles", req.body).then(res.redirect("/"));
  }
});

router.get("/delete/:id", (req, res) => {
  db.delProfile(req.params.id).then(foundThing => {
    console.log(foundThing);
    res.redirect("/");
  });
});
//merge and test

router.get("/addrecipe/:id", (req, res) => {
  res.render("addRecipe");
});

router.post("/addrecipe/:id", (req, res, next) => {
  const newRecipe = {
    profile_id: req.params.id,
    recipe_post: req.body.recipe_post,
    title: req.body.title,
    recipe_picture: req.body.picture
  };
  if (
    req.body.title === "" ||
    req.body.recipe_post === "" ||
    req.body.recipe_picture === ""
  ) {
    return;
  } else {
    db.addRecipe("recipes", newRecipe).then(res.redirect("/"));
  }
});

module.exports = router;
