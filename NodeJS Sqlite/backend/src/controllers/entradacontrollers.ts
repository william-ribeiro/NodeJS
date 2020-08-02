import knex from '../database/connection';
import {Request, Response} from 'express';

class entradaController{
  async index(request:Request, response:Response){
    const entrada =await knex('entrada')
    .join('produtos','id','=','entrada.cod_produto')
    .select('entrada.id_entrada','produtos.nome','entrada.qtde','entrada.dt_entrada','entrada.p_compra')
    return response.json(entrada);
  }

  async create(request:Request, response:Response){
    const {cod_produto,qtde,dt_entrada,p_compra}=request.body
    const [id_entrada]=await knex('entrada')
      .insert({cod_produto,qtde,dt_entrada,p_compra})

    const entrada =await knex('entrada').where('id_entrada',id_entrada)
      .join('produtos','id','=','entrada.cod_produto')
      .select('entrada.id_entrada','produtos.nome','entrada.qtde','entrada.dt_entrada','entrada.p_compra')      
    return response.json(entrada);
  }

  async delete(request:Request, response:Response){
    const id_entrada=request.params.id_entrada
    const entrada=await knex('entrada').where('id_entrada',id_entrada).first();

    if(!entrada){
      return response.status(401).json({error:"Exclusão não autorizada"})
    }
      await knex('entrada').where('id_entrada',id_entrada).delete();
      return response.status(201).send();
  }

  async put(request:Request, response:Response){
    const id_entrada =request.params.id_entrada
    const entrada=await knex('entrada').where('id_entrada',id_entrada).first();

    if (!entrada){
      return response.status(401).json({error:"Edição não autorizada"})
    }
      const{cod_produto,qtde,dt_entrada,p_compra}=request.body;
      await knex('entrada').where('id_entrada',id_entrada).update({cod_produto,qtde,dt_entrada,p_compra});

      return response.status(201).json({sucess:"Alteração realizada com sucesso"})
  } 

}
export default entradaController