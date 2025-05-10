import { emp_Insert,update_emp_data,delete_employee_Data,getEmployee,getEmployeeEdit} from '../controllers/EmpController.js';
import { Router } from 'express';

const mainEmp = new Router();

mainEmp.post('/emp_data/emp_insert', emp_Insert);
mainEmp.patch('/emp_data/update-data/:id',update_emp_data); // Route for inserting employee
mainEmp.delete('/emp_data/delete-data/:id',delete_employee_Data); 
mainEmp.get('/emp_data/get-data',getEmployee); 
mainEmp.get('/emp_data/edit-data/:id',getEmployeeEdit); // Route for inserting employee

export default mainEmp;