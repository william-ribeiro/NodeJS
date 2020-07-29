import Knex from 'knex';

export async function up(knex:Knex){
  return knex.schema.createTable('clientes',table=>{
    table.increments('id_cliente').primary();
    table.string('nome').notNullable();
  })

}

export async function down(knex:Knex){
  return knex.schema.dropTable('clientes')
}