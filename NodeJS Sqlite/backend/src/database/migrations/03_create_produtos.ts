import Knex from 'knex';

export async function up(knex:Knex){
  return knex.schema.createTable('produtos',table=>{
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.integer('marca_id').notNullable();
    table.integer('undmedida_id').notNullable();
    /**Cria o relacionamento com a outra tabela */
    table.foreign('marca_id').references('id_marca').inTable('marcas');
    table.foreign('undmedida_id').references('id_UndMedida').inTable('undMedidas');
  })
}

export async function down(knex:Knex){
  return knex.schema.dropTable('produtos')
}