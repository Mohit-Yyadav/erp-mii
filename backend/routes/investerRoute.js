import {insertInvestor,updateInvestor,deleteInvestor} from '../controllers/invester_controller.js';
import {Router} from  'express';
import upload from "../config/multerConfig.js"
const investorRoutes =new Router ();


investorRoutes.post('/investorform/insert-data',upload.single("photo"),insertInvestor);
investorRoutes.patch('/investorform/update-data/:id',updateInvestor);
investorRoutes.delete('/investorform/delete-data/:id',deleteInvestor);
export default investorRoutes;