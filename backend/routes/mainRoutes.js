import { deleteMainFormData, insertMainFormData,updateMainFormData } from '../controllers/mainController.js';



import { Router } from 'express';
const  mainRoutes = new Router();

// Add routes
// routes.get('/', SessionController.store);
mainRoutes.post('/mainform/insert-data', insertMainFormData);
mainRoutes.patch('/mainform/update-data/:id',updateMainFormData);
mainRoutes.delete('/mainform/delete-data/:id',deleteMainFormData);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default mainRoutes;
