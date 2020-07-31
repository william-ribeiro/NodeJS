import express from 'express';
import MarcaControllers from './controllers/marcaControllers'
import ProdutoControllers from './controllers/produtocontrollers'
import UndMedidaControllers from './controllers/undmedidacontrollers'
import ClienteControllers from './controllers/clienteControllers'

const routes=express.Router()
const marcacontroller=new MarcaControllers
const produtocontroller=new ProdutoControllers
const undmedidacontroller=new UndMedidaControllers
const clientecontroller=new ClienteControllers

routes.get('/',marcacontroller.index);
routes.post('/',marcacontroller.create);
routes.delete('/:id_Marca',marcacontroller.delete);
routes.put('/:id_Marca',marcacontroller.put);

routes.get('/produtos',produtocontroller.index);
routes.post('/produtos',produtocontroller.create);
routes.delete('/produtos/:id',produtocontroller.delete);
routes.put('/produtos/:id',produtocontroller.put);

routes.get('/undmedida',undmedidacontroller.index);
routes.post('/undmedida',undmedidacontroller.create);
routes.delete('/undmedida/:id_undMedida',undmedidacontroller.delete);
routes.put('/undmedida/:id_undMedida',undmedidacontroller.put);

routes.get('/cliente',clientecontroller.index);
routes.post('/cliente',clientecontroller.create);
routes.delete('/cliente/:id_cliente',clientecontroller.delete);
routes.put('/cliente/:id_cliente',clientecontroller.put);

export default routes