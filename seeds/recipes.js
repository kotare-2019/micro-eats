exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          profile_id: 1,
          title: "title1",
          recipe_post: "hjklh",
          rating: 4
        },
        {
          id: 2,
          profile_id: 2,
          title: "title2",
          recipe_post: "jkhjk",
          rating: 0
        },
        {
          id: 3,
          profile_id: 3,
          title: "title3",
          recipe_post: "jhkkh",
          rating: 2
        }
      ]);
    });
};
