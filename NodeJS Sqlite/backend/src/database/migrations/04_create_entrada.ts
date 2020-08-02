import Knex from 'knex';

export async function up(knex:Knex){
  return knex.schema.createTable('entrada',table=>{
    table.increments('id_entrada').primary();
    table.integer('cod_produto').notNullable();
    table.integer('qtde').notNullable();
    table.date('dt_entrada').notNullable();
    table.decimal('p_compra').notNullable();
    /**Cria o relacionamento com a outra tabela */
    table.foreign('cod_produto').references('id').inTable('produtos');    
  })
}

export async function down(knex:Knex){
  return knex.schema.dropTable('entrada')
}