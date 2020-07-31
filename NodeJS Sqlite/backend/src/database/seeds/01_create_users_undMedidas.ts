import Knex from 'knex';

export async function seed(knex:Knex){
  return knex('undMedidas').insert([
    {n_undMedida:'Und'},
    {n_undMedida:'Peça'},
    {n_undMedida:'Metros'}
  ])
}