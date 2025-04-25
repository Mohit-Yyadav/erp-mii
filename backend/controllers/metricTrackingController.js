import db from "../config/db.js";
import checkMissingFields from "../utils/checkMissingFields.js"
// INSERTING DATA
// INSERTING DATA
export const insertMetricTracking = async (req, res) => {
  try {
    const {
      milestone, metric, targetValue, currentValue, date, trend, note,
    } = req.body;

    const requiredFields = [
      "milestone", "metric", "targetValue", "currentValue", "date", "trend", "note"
    ];
    const validationError = checkMissingFields(requiredFields, req.body);
    if (validationError) {
      return res.status(400).json(validationError);
    }

    const data = await db.query(
      `INSERT INTO metric_tracking (milestone, metric, targetValue, currentValue, date, trend, note)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [milestone, metric, targetValue, currentValue, date, trend, note]
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
export const updateMetricTracking = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).send({
          success: false,
          message: "INVALID ID or provide ID",
        });
      }
  
      const {
        milestone, metric, targetValue, currentValue, date, trend, note
      } = req.body;
  
      const data = await db.query(
        `UPDATE metric_tracking SET 
          milestone = ?, 
          metric = ?, 
          targetValue = ?, 
          currentValue = ?, 
          date = ?, 
          trend = ?, 
          note = ?
        WHERE id = ?`,
        [milestone, metric, targetValue, currentValue, date, trend, note,id]
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
 export const deleteMetricTracking = async (req,res)=>{
  try{
      const id = req.params.id
      if(!id){
        return res.status(404).send({
          success:false,
          message:'please provide ID or VALID ID',
        });
      }
      const data = await db.query ('DELETE FROM metric_tracking WHERE id=?',[id]);
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