import knex from '../database/connection';
import {Request, Response} from 'express';

class undmedidaController{
  async index(request:Request, response:Response){
    const und =await knex('undMedidas').select('*');
    return response.json(und);
  }

  async create(request:Request, response:Response){
    const {n_undMedida}=request.body
    const [id_undMedida]=await knex('undMedidas').insert({n_undMedida});

    return response.json({id_undMedida,n_undMedida})
  }

  async delete(request:Request, response:Response){
    const id_undMedida=request.params.id_undMedida
    const und=await knex('undMedidas').where('id_undMedida',id_undMedida).first();

    if(!und){
      return response.status(401).json({error:"Exclusão não autorizada"})
    }
      await knex('undMedidas').where('id_undMedida',id_undMedida).delete();
      return response.status(201).send();
  }

  async put(request:Request, response:Response){
    const id_undMedida=request.params.id_undMedida
    const und=await knex('undMedidas').where('id_undMedida',id_undMedida).first();

    if(!und){
      return response.status(401).json({error:"Edição não autorizada"})
    }
    const {n_undMedida}=request.body
      await knex('undMedidas').where('id_undMedida',id_undMedida).update({n_undMedida});
      return response.status(201).json({sucess:"Alteração realizada com sucesso"})
  }

}
export default undmedidaController