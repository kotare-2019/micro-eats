
exports.up = function(knex, Promise) {
  return knex.schema.table('recipes', function(table) {
    table.string('recipe_picture')  
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('recipes', function(table){
        table.dropColumn('recipe_picture')
    })
};




