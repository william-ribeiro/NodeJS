import Knex from 'knex';

export async function up(knex:Knex){
  return knex.schema.createTable('undMedidas',table=>{
    table.increments('id_undMedida').primary();
    table.string('n_undMedida').notNullable();
  })

}

export async function down(knex:Knex){
  return knex.schema.dropTable('undMedidas')
}