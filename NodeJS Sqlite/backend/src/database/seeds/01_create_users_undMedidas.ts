import Knex from 'knex';

export async function seed(knex:Knex){
  return knex('undMedidas').insert([
    {nome:'Und'},
    {nome:'Peça'},
    {nome:'Metros'}
  ])
}