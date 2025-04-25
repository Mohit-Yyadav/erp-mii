import { deleteMetricTracking, insertMetricTracking, updateMetricTracking } from '../controllers/metricTrackingController.js';

import { Router } from 'express';

const metricTracking = new Router();

metricTracking.post('/metric/insert-MetricTracking', insertMetricTracking);
metricTracking.patch('/metric/update-MetricTracking/:id', updateMetricTracking);
metricTracking.delete('/metric/delete-MetricTracking/:id', deleteMetricTracking);

export default metricTracking;
