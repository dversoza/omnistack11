
exports.up = function(knex, Promise) {
    return knex.schema.createTable('incidents', function(table){
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      
      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};