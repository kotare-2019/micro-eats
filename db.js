const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getRecipe: getRecipe,
  getRecipes: getRecipes
}

function getUsers (db = connection) {
  return db('profiles').select()
}

function getUser (id, db = connection) {
  return db('profiles').where('id', id).first()
}

function getRecipes ( db = connection){
  return db('recipes')
  .join('profiles', 'profiles.id', 'recipes.profile_id')
  .select('*', 'recipes.id AS id')
}

function getRecipe(id, db = connection){
  return db('recipes')
  .where('id', id).first()
}

