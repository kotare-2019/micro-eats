exports.up = function(knex, Promise) {
  return knex.schema.createTable("profiles", table => {
    table.increments("id").primary();
    table.string("name");
    table.string("email");
    table.string("bio");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("profiles");
};
