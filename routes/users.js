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

router.get('/profile/:id', (req, res, next)=>{
  db.getProfile(req.params.id)
  .then(profile=>{
    console.log(profile)
    res.render('profile', {profile: profile})
  })
})

router.get('/addprofile', (req, res, next)=>{
  
    res.render('addProfile')

})


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

router.get("/addrecipe", (req, res) => {
  res.render("addRecipe");
});

router.post("/addrecipe", (req, res, next) => {
  if (
    req.body.title === "" ||
    req.body.post === "" ||
    req.body.recipe_picture === ""
  ) {
    return;
  } else {
    db.addUser("profiles", req.body).then(res.redirect("/"));
  }
});

module.exports = router;
