exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          profile_id: 88802,
          title: "title1",
          recipe_post: "hjklh",
          rating: 4
        },
        {
          id: 2,
          profile_id: 88802,
          title: "Simple Semolina Pasta",
          recipe_post: "This is where the recipe will go",
          rating: 5
        },
        {
          id: 3,
          profile_id: 88804,
          title: "title3",
          recipe_post: "jhkkh",
          rating: 2
        }
      ]);
    });
};
