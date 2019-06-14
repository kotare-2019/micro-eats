const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const connection = require("knex")(config);

function getProfiles(db = connection) {
  return db("profiles").select();
}

function getProfile(id, db = connection) {
  return db("profiles")
    .where("id", id)
    .first();
}

function getRecipes(db = connection) {
  return db("recipes")
    .join("profiles", "profiles.id", "recipes.profile_id")
    .select("*", "recipes.id AS id");
}

function getRecipe(id, db = connection) {
  return db("recipes")
    .where("id", id)
    .first();
}

function addUser(database, body, db = connection) {
  return db(database).insert({
    name: body.name,
    email: body.email,
    bio: body.bio
  });
}

function delProfile(id, db = connection) {
  console.log(id)
  return db("profiles")
    .where("id", id)
    .delete();
}


function addRecipe(database, body, db = connection) {
  return db(database).insert({
    name: body.title,
    email: body.post,
    bio: body.recipe_picture,
  });
}

module.exports = {
  getProfile: getProfile,
  getProfiles: getProfiles,
  getRecipe: getRecipe,
  getRecipes: getRecipes,
  addUser: addUser,
  delProfile: delProfile,
  addRecipe: addRecipe,
};
