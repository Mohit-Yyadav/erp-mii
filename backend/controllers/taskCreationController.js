import db from "../config/db.js";
import checkMissingFields from "../utils/checkMissingFields.js"

// INSERTING DATA
export const taskCreationInsert = async (req, res) => {
  try {
    const {
      milestone,task,dueDate,status,assigned,priority,comments	
    } = req.body;

    const requiredFields = [
        "milestone","task","dueDate","status","assigned","priority","comments"	
    ];
    const validationError = checkMissingFields(requiredFields, req.body);
    if (validationError) {
      return res.status(400).json(validationError);
    }

    const data = await db.query(
      `INSERT INTO task_creation (milestone,task,dueDate,status,assigned,priority,comments)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [milestone,task,dueDate,status,assigned,priority,comments]
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
export const taskCreationUpdate = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).send({
          success: false,
          message: "INVALID ID or provide ID",
        });
      }
  
      const {
        milestone,task,dueDate,status,assigned,priority,comments
      } = req.body;
  
      const data = await db.query(
        `UPDATE task_creation SET 
          milestone = ?, 
          task = ?, 
          dueDate = ?, 
          status = ?, 
          assigned = ?, 
          priority = ?, 
          comments = ?
        WHERE id = ?`,
        [ milestone,task,dueDate,status,assigned,priority,comments,id]
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
 export const taskCreationDelete = async (req,res)=>{
  try{
      const id = req.params.id
      if(!id){
        return res.status(404).send({
          success:false,
          message:'please provide ID or VALID ID',
        });
      }
      const data = await db.query ('DELETE FROM task_creation WHERE id=?',[id]);
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