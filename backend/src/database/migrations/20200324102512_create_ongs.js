const knex =require("knex");


exports.up = function up(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf').notNullable();
  })
}
exports.down =  function (knex) {
  return knex.schema.dropTable('ongs');
}

