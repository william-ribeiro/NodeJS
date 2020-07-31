import knex from '../database/connection';
import {Request, Response} from 'express';

class produtoController{
  async index(request:Request, response:Response){
    const produto =await knex('produtos')
      .join('marcas','id_marca','=','produtos.marca_id')
      .join('undMedidas','id_undMedida','=','produtos.undmedida_id')
      .select('produtos.id','produtos.nome','marcas.n_marca','undMedidas.n_undMedida')
    return response.json(produto);
  }

  async create(request:Request, response:Response){
    const {nome,marca_id,undmedida_id}=request.body
    const [id]=await knex('produtos')
      .insert({nome,marca_id,undmedida_id})

    const produto =await knex('produtos')
      .join('marcas','id_marca','=','produtos.marca_id')
      .join('undMedidas','id_undMedida','=','produtos.undmedida_id')
      .select('produtos.nome','marcas.n_marca','undMedidas.n_undMedida')
    return response.json(produto);
  }

  async delete(request:Request, response:Response){
    const id=request.params.id
    const produto=await knex('produtos').where('id',id).first();

    if(!produto){
      return response.status(401).json({error:"Exclusão não autorizada"})
    }
      await knex('produtos').where('id',id).delete();
      return response.status(201).send();
  }

  async put(request:Request, response:Response){
    const id =request.params.id
    const produto=await knex('produtos').where('id',id).first();

    if (!produto){
      return response.status(401).json({error:"Edição não autorizada"})
    }
      const{nome,marca_id,undmedida_id}=request.body;
      await knex('produtos').where('id',id).update({nome,marca_id,undmedida_id});
      return response.status(201).json({sucess:"Alteração realizada com sucesso"})
  } 

}
export default produtoController