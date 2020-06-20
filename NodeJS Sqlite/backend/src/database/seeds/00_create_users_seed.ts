import Knex from 'knex';

export async function seed(knex:Knex){
  return knex('users').insert([
    {name:'teste 1'},
    {name:'teste 2'},
    {name:'teste 3'},
    {name:'teste 4'},
    {name:'teste 5'},
  ])
}