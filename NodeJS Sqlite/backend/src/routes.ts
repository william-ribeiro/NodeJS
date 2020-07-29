import express from 'express';
import MarcaControllers from './controllers/marcaControllers'

const routes=express.Router()
const marcacontroller=new MarcaControllers

routes.get('/',marcacontroller.index);
routes.post('/',marcacontroller.create);
routes.delete('/:id_Marca',marcacontroller.delete);
routes.put('/:id_Marca',marcacontroller.edit);

export default routes