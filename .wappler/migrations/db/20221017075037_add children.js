
exports.up = function(knex) {
  return knex.schema
    .createTable('simpleuser_children', async function (table) {
      table.increments('child_id');
      table.integer('simpleuser_id').unsigned();
      table.foreign('simpleuser_id').references('id').inTable('simpleusers').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('simpleuser_children')
};
