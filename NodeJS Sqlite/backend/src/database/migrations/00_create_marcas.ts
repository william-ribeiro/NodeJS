import Knex from 'knex';

export async function up(knex:Knex){
  return knex.schema.createTable('marcas',table=>{
    table.increments('id_Marca').primary();
    table.string('nome').notNullable();
  })

}

export async function down(knex:Knex){
  return knex.schema.dropTable('marcas')
}