import express from "express";
import { insertmeeting,updateMeeting,deleteMetting } from "../controllers/meetingScheduleController.js";

const mettingSchedule = express.Router(); // ✅ Use express.Router() instead of Route

mettingSchedule.post('/mettingSchedule/scheduleMeeting', insertmeeting);
mettingSchedule.patch('/mettingSchedule/MeetingUpdate/:id', updateMeeting);
mettingSchedule.delete('/mettingSchedule/MeetingDelete/:id', deleteMetting);

export default mettingSchedule;