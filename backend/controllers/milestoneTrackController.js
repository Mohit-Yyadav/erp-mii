import db from "../config/db.js";
import checkMissingFields from "../utils/checkMissingFields.js"
// INSERTING DATA
// INSERTING DATA
export const insertMilestone = async (req, res) => {
  try {
    const {
        name, startDate, endDate, status, competition, priority, responsible, comments,
    } = req.body;

    const requiredFields = [
      "name", "startDate", "endDate", "status", "competition", "priority", "responsible","comments"
    ];
    const validationError = checkMissingFields(requiredFields, req.body);
    if (validationError) {
      return res.status(400).json(validationError);
    }

    const data = await db.query(
      `INSERT INTO milestone_track (name, startDate, endDate, status, competition, priority, responsible, comments)
       VALUES (?, ?, ?, ?, ?, ?, ?,?)`,
      [name, startDate, endDate, status, competition, priority, responsible, comments]
    );

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "ERROR in INSERT query",
      });
    }

    return res.status(201).send({
      success: true,
      message: "Data has been INSERTED successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "ERROR in INSERTING data",
      error,
    });
  }
};

  

// UPDATING DATA
export const updateMilestone = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).send({
          success: false,
          message: "INVALID ID or provide ID",
        });
      }
  
      const {
        name, startDate, endDate, status, competition, priority, responsible, comments
      } = req.body;
  
      const data = await db.query(
        `UPDATE milestone_track SET 
          name = ?, 
          startDate = ?, 
          endDate = ?, 
          status = ?, 
          competition = ?, 
          priority = ?, 
          responsible = ?,
          comments = ?
        WHERE id = ?`,
        [name, startDate, endDate, status, competition, priority, responsible, comments,id]
      );
  
      res.status(200).send({
        success: true,
        message: "Data UPDATED successfully",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "ERROR in UPDATING data",
        error,
      });
    }
  };
// DELETING DATA
 export const deleteMilestone = async (req,res)=>{
  try{
      const id = req.params.id
      if(!id){
        return res.status(404).send({
          success:false,
          message:'please provide ID or VALID ID',
        });
      }
      const data = await db.query ('DELETE FROM milestone_track WHERE id=?',[id]);
      res.status(200).send({
        success:true,
        message:'DATA DELETED successfully',
      })
  }catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:'ERROR in DELETING data',
      error,
    });
  }
 };