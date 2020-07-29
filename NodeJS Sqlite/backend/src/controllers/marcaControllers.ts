import knex from '../database/connection';
import {Request, Response} from 'express';

class marcaController{
  async index(request:Request, response:Response){
    const marca =await knex('marcas').select('*');
    return response.json(marca);
  }

  async create(request:Request, response:Response){
    const {nome}=request.body
    const [id_Marca]=await knex('marcas').insert({nome});

    return response.json({id_Marca,nome})
  }

  async delete(request:Request, response:Response){
    const id_Marca=request.params.id_Marca
    const marca=await knex('marcas').where('id_Marca',id_Marca).first();

    if(!marca){
      return response.status(401).json({error:"Exclusão não autorizada"})
    }
      await knex('marcas').where('id_Marca',id_Marca).delete();
      return response.status(201).send();
  }

  async edit(request:Request, response:Response){
    const id_Marca =request.params.id_Marca
    const marca=await knex('marcas').where('id_Marca',id_Marca).first();

    if (!marca){
      return response.status(401).json({error:"Edição não autorizada"})
    }
      const {nome}=request.body;
      await knex('marcas').where('id_Marca',id_Marca).update({nome});
      return response.status(201).json({sucess:"Alteração realizada com sucesso"})
  }

}
export default marcaController