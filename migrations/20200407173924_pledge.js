exports.up = function(knex, Promise) {
  return knex.schema.createTable('pledge', function(table) {
    table.increments();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.text('description').notNullable();
    table.decimal('amount').notNullable();
    table.text('type').notNullable();
    table.text('firstName').notNullable();
    table.text('lastName');
    table.text('email');
    table.text('instagram');
    table.boolean('anonymous');
    table.integer('goal_id').unsigned().references('goal.id').onDelete('CASCADE').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pledge');
};
