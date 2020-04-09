exports.up = function(knex, Promise) {
  return knex.schema.createTable('goal', function(table) {
    table.increments();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.text('firstName').notNullable();
    table.text('lastName').notNullable();
    table.text('email').notNullable();
    table.text('description').notNullable();
    table.text('challenge').notNullable();
    table.text('businessName').notNullable();
    table.text('place_id').notNullable();
    table.text('businessAddress');
    table.text('businessPhone');
    table.text('website');
    table.text('instagram');
    table.decimal('amountRaised');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('goal');
};
