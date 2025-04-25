import db from "../config/db.js";
import  checkMissingFields  from "../utils/checkMissingFields.js";

// INSERTING INVESTOR DATA
export const insertmeeting = async (req, res) => {
  try {
    const requiredFields = [
        "title",
        "purpose",
        "dateAndTime",
        "location",
        "attend"
    ];

       const validationError = checkMissingFields(requiredFields, req.body);
       if (validationError) {
           return res.status(400).json(validationError);
       }



    // Insert into Database
    const data = await db.query(
        `INSERT INTO meetingschedule (
                  title, purpose, dateAndTime,  location, attend
              ) VALUES (?, ?, ?, ?, ?);`,
        [
          req.body.title,
          req.body.purpose,
          req.body.dateAndTime,
          req.body.location,
          req.body.attend,
  
        ]
    );
if(data){
    return res.status(201).send({
      success: true,
      message: "Investor data inserted successfully !",
    });
}
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error inserting investor data",
      error: error.message,
    });
  }
};

// UPDATING INVESTOR DATA
export const updateMeeting= async (req, res) => {


    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).send({
          success: false,
          message: "Invalid ID or ID is required",
        });
      }

      const {
        title, purpose, dateAndTime,  location, attend,
      } = req.body;

 
   

      // UPDATE DATA IN DATABASE
      const data = await db.query(
        `UPDATE meetingschedule SET 
                    title=?, purpose=?, dateAndTime=?, location=?, attend=?
                WHERE id=?;`,
        [
            title, purpose, dateAndTime,  location, attend,
              id,
             
            ]
         
      );

      if (!data) {
        return res.status(500).send({
          success: false,
          message: "Error updating investor data",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Investor data updated successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: "Error updating investor data",
        error: error.message,
      });
    }
  };


// DELETING INVESTOR DATA

export const deleteMetting = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "please provide ID or VALID ID",
      });
    }

    const data = await db.query(`DELETE FROM meetingschedule WHERE id=?`, [
      id,
    ]);

    res.status(200).send({
      success: true,
      message: "data DELETED successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "ERROR IN DELETING meeting schedule FORM DATA ",
    });
  }
};
