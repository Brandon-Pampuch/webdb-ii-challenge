
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        { id: 1, make: 'rowValue1', model: "chevy" },
        { id: 2, make: 'rowValue2', model: "ford" },
        { id: 3, make: 'rowValue3', model: "suzuki" }
      ]);
    });
};
