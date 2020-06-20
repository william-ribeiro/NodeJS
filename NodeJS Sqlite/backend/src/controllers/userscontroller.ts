import knex from '../database/connection';
import {Request, Response} from 'express';

class userscontroller{
  async index(request:Request, response:Response){
    const users =await knex('users').select('*');
    return response.json(users);
  }

  async create(request:Request, response:Response){
    const {name}=request.body
    const [id]=await knex('users').insert({name});

    return response.json({id,name})
  }

  async delete(request:Request, response:Response){
    const id=request.params.id
    const users=await knex('users').where('id',id).first();

    if(!users){
      return response.status(401).json({error:"Exclusão não autorizada"})
    }
      await knex('users').where('id',id).delete();
      return response.status(201).send();
  }

  async edit(request:Request, response:Response){
    const id =request.params.id
    const users=await knex('users').where('id',id).first();

    if (!users){
      return response.status(401).json({error:"Edição não autorizada"})
    }
      const {name}=request.body;
      await knex('users').where('id',id).update({name});
      return response.status(201).json({sucess:"Alteração realizada com sucesso"})
  }

}
export default userscontroller