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


router.get('/profile/:id', (req, res, next)=>{
  db.getProfile(req.params.id)
  .then(profile=>{
    console.log(profile)
    res.render('profile', {profile: profile})
  })
})
module.exports = router;

router.get('/addprofile', (req, res, next)=>{
  res.render('addProfile')
})

router.post('/addprofile', (req, res, next)=>{
  console.log
})