import express from 'express';
import UsersControllers from './controllers/userscontroller'

const routes=express.Router()
const usercontroller=new UsersControllers

routes.get('/',usercontroller.index);
routes.post('/',usercontroller.create);
routes.delete('/:id',usercontroller.delete);
routes.put('/:id',usercontroller.edit);

export default routes