import { deleteMetric, insertMetric, updateMetric } from '../controllers/metricController.js';
import { Router } from 'express';

const mainMetric = new Router();

mainMetric.post('/metric/insert-Metric', insertMetric);
mainMetric.patch('/metric/update-Metric/:id', updateMetric);
mainMetric.delete('/metric/delete-Metric/:id', deleteMetric);

export default mainMetric;