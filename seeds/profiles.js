
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        { id: 88801, name: "nhoj", bio: 'abc', email: 'name@name.com' },
        { id: 88802, name: "Ben Sherwood", bio: 'Dev Academy Student| I love cooking, when I have the energy! My favorite food to cook would be Italian. I love how much depth you can get with realitively simple flavours', email: 'dontspamme@gmail.com' },
        { id: 88803, name: "Dan Rhodes", bio: 'abc', email: 'name@name.com' },
        { id: 88804, name: "Tess ", bio: 'abc', email: 'name@name.com' }
      ]);
    });
};
