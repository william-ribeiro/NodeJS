import Knex from 'knex';

export async function seed(knex:Knex){
  return knex('clientes').insert([
    {n_cliente:'Avulso'},
    {n_cliente:'HelpDigital'}    
  ])
}