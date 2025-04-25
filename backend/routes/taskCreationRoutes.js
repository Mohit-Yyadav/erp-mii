import { taskCreationInsert, taskCreationDelete, taskCreationUpdate } from '../controllers/taskCreationController.js';

import { Router } from 'express';

const taskCreation = new Router();

taskCreation.post('/taskCreation/insert-taskCreation', taskCreationInsert);
taskCreation.patch('/taskCreation/update-taskCreation/:id', taskCreationUpdate);
taskCreation.delete('/taskCreation/delete-taskCreation/:id', taskCreationDelete);

export default taskCreation;
