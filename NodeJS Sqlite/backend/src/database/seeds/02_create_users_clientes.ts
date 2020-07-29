import Knex from 'knex';

export async function seed(knex:Knex){
  return knex('clientes').insert([
    {nome:'Avulso'},
    {nome:'HelpDigital'}    
  ])
}