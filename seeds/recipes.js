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
          title: "Pizza Pan",
          recipe_post: "Never want to grow up? make this!",
          rating: 4,
          recipe_picture: "https://assets.bonappetit.com/photos/5aa94eb56ed79626bc262c39/16:9/w_1200,c_limit/cast-iron-pizza-with-fennel-and-sausage.jpg"
        },
        {
          id: 2,
          profile_id: 88802,
          title: "Simple Semolina Pasta",
          recipe_post: "This is where the recipe will go",
          rating: 5,
          recipe_picture: "https://www.ijustmakesandwiches.com/wp-content/uploads/2019/02/how-to-make-homemade-pasta-2-of-3.jpg"
        },
        {
          id: 3,
          profile_id: 88804,
          title: "title3",
          recipe_post: "jhkkh",
          rating: 2,
          recipe_picture: "https://eluxemagazine.com/wp-content/uploads/2017/08/oh-my-veggies-korean-tofu-bowl.jpg"
        }
      ]);
    });
};
