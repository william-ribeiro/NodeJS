import Knex from 'knex';

export async function up(knex:Knex){
  return knex.schema.createTable('marcas',table=>{
    table.increments('id_marca').primary();
    table.string('n_marca').notNullable();
  })
}

export async function down(knex:Knex){
  return knex.schema.dropTable('marcas')
}