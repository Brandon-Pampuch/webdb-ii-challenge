
exports.up = function (knex) {

    return knex.schema.createTable('cars', tbl => {
        // creates a primary key called id
        tbl.increments();
        tbl.text('make', 128).unique().notNullable();
        tbl.text('model').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
