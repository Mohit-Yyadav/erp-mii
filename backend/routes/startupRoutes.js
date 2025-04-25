import { insert_startup,update_startup,deletestartup } from "../controllers/startupController.js";
import{ Router} from 'express';
const startupRoutes = new Router();

// startupRoutes.post('/startupform/insert_data',insertStartup);
startupRoutes.post('/startupform/insert_data', insert_startup);
startupRoutes.patch('/startupform/update_data/:id',update_startup);
startupRoutes.delete('/startupProfile/delete-start/:id',deletestartup);


export default startupRoutes;