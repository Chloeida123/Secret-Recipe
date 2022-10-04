exports.up = function (knex) {
  return knex.schema.createTable('foods', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('ingredients')
    table.string('directions')
    table.string('images')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('foods')
}
