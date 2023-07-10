
exports.up = function(knex) {
  return knex.schema
    .table('simpleuser_children', async function (table) {
      table.boolean('business');
      table.boolean('personal');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('simpleuser_children', async function (table) {
      table.dropColumn('business');
      table.dropColumn('personal');
    })
};
