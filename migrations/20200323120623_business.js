exports.up = function(knex, Promise) {
  return knex.schema.createTable('business', function(table) {
    table.increments();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.text('firstName').notNullable();
    table.text('lastName').notNullable();
    table.text('email').notNullable();
    table.text('description').notNullable();
    table.text('challenge').notNullable();
    table.text('businessName').notNullable();
    table.text('businessAddress').notNullable();
    table.text('businessPhone').notNullable();
    table.text('website').notNullable();
    table.text('place_id').notNullable();
    table.text('instagram');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('business');
};
