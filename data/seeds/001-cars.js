
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, make: 's10', model: 'chevy' },
        { id: 2, make: 'f150', model: 'ford' },

      ]);
    });
};
