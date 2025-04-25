import express from "express";
import { InsertMentorProfile,updateMentor,MentorDelete } from "../controllers/MentorProfileController.js";

const mainMentor = express.Router(); // ✅ Use express.Router() instead of Route

mainMentor.post('/mentor/insert-profile', InsertMentorProfile);
mainMentor.patch('/mentor/insert-profile1/:id', updateMentor);
mainMentor.delete('/mentor/insert-profile2/:id', MentorDelete);

export default mainMentor;