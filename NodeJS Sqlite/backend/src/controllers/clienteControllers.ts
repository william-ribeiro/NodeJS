import knex from '../database/connection';
import {Request, Response} from 'express';

class clienteController{
  async index(request:Request, response:Response){
    const cliente =await knex('clientes').select('*');
    return response.json(cliente);
  }

  async create(request:Request, response:Response){
    const {n_cliente}=request.body
    const [id_cliente]=await knex('clientes').insert({n_cliente});

    return response.json({id_cliente,n_cliente})
  }

  async delete(request:Request, response:Response){
    const id_cliente=request.params.id_cliente
    const cliente=await knex('clientes').where('id_cliente',id_cliente).first();

    if(!cliente){
      return response.status(401).json({error:"Exclusão não autorizada"})
    }
      await knex('clientes').where('id_cliente',id_cliente).delete();
      return response.status(201).send();
  }

  async put(request:Request, response:Response){
    const id_cliente =request.params.id_cliente
    const cliente=await knex('clientes').where('id_cliente',id_cliente).first();

    if (!cliente){
      return response.status(401).json({error:"Edição não autorizada"})
    }
      const {n_cliente}=request.body;
      await knex('clientes').where('id_cliente',id_cliente).update({n_cliente});
      return response.status(201).json({sucess:"Alteração realizada com sucesso"})
  }

}
export default clienteController