exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", table => {
    table.increments("id").primary();
    table.integer("profile_id");
    table.string("recipe_post");
    table.string("title");
    table.integer("rating");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes");
};
