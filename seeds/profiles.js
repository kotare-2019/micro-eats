
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, name:"nhoj", bio:'abc', email:'name@name.com'},
        {id: 2, name:"nhoj", bio:'abc', email:'name@name.com'},
        {id: 3, name:"nhoj", bio:'abc', email:'name@name.com'}
      ]);
    });
};
