const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes => {
      console.log(recipes)
      res.render("index", { recipes: recipes });
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.get('/recipe/:id', (req,res,next)=>{
  console.log(req.params.id)
  res.send("Recipe Route Working")
})

router.get('/profile/:id', (req, res, next)=>{
  res.send("Profile Route Working")
})
module.exports = router;
