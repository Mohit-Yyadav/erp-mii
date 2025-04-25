import { deleteMilestone, insertMilestone, updateMilestone } from '../controllers/milestoneTrackController.js';

import { Router } from 'express';

const milestone = new Router();

milestone.post('/milestone/insert-milestone', insertMilestone);
milestone.patch('/milestone/update-milestone/:id', updateMilestone);
milestone.delete('/milestone/delete-milestone/:id', deleteMilestone);

export default milestone;
