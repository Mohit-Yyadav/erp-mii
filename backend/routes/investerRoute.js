import {insertInvestor,updateInvestor,deleteInvestor,getMentorForm,getMentorFormEdit,} from '../controllers/invester_controller.js';
import {Router} from  'express';
import upload from "../config/multerConfig.js"
const investorRoutes =new Router ();


investorRoutes.post('/investorform/insert-data',upload.single("photo"),insertInvestor);
investorRoutes.patch('/investorform/update-data/:id',updateInvestor);
investorRoutes.delete('/investorform/delete-data/:id',deleteInvestor);
investorRoutes.get('/investorform/get_data',getMentorForm);
investorRoutes.get('/investorform/getDataEidt',getMentorFormEdit);

export default investorRoutes;