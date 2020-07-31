import Knex from 'knex';

export async function seed(knex:Knex){
  return knex('marcas').insert([
    {n_marca:'Cisco'},
    {n_marca:'Dell'},
    {n_marca:'HP'}
  ])
}