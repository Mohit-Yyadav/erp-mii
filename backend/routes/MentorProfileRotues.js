import express from "express";
import { InsertMentorProfile,updateMentor,MentorDelete,getMentor,getMentorEdit,getMentorView} from "../controllers/MentorProfileController.js";
import upload from "../config/multerConfig.js";

const mainMentor = express.Router(); // ✅ Use express.Router() instead of Route

mainMentor.post('/mentor/insert-profile',upload.single("img"),InsertMentorProfile);
mainMentor.patch('/mentor/insert-profile1/:id', updateMentor);
mainMentor.delete('/mentor/insert-profile2/:id', MentorDelete);
mainMentor.get('/mentor/get-mentor',getMentor);
mainMentor.get('/mentor/get-mentorView/:id',getMentorView);
mainMentor.get('/mentor/get-mentorEdit/:id',getMentorEdit);

export default mainMentor;
