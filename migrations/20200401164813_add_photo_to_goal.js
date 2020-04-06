exports.up = function(knex, Promise) {
  return knex.schema.table('goal', function(table) {
    table.text('photoUrl');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('goal', function(table) {
    table.dropColumn('photoUrl');
  });};
