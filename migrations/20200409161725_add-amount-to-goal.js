exports.up = function(knex, Promise) {
  return knex.schema.table('goal', function(table) {
    table.decimal('amount');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('goal', function(table) {
    table.dropColumn('amount');
  });};
