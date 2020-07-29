import Knex from 'knex';

export async function seed(knex:Knex){
  return knex('marcas').insert([
    {nome:'Cisco'},
    {nome:'Dell'},
    {nome:'HP'}
  ])
}