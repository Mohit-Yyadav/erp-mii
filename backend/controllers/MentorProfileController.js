import db from "../config/db.js";
import  checkMissingFields  from "../utils/checkMissingFields.js";

// Accept single file upload with field name 'picture'
export const InsertMentorProfile = async (req, res) => {
        try {
            const {
                name, DOB, contact, linked_in, permanent_add, gender, email,
                 job_title, edu_qual, company, field, topics, per_website, availability
                } = req.body; 
            const requiredFields = [
                "name", "DOB", "contact", "linked_in", "permanent_add", "gender", "email",
                 "job_title", "edu_qual", "company", "field", "topics", "per_website", "availability"
            ]
       const validationError = checkMissingFields(requiredFields, req.body);
       if (validationError) {
        console.log(validationError)
           return res.status(400).json(validationError);
       }
            if (!req.file) {
                return res.status(400).send({
                    success: false,
                    message: "Profile picture is required",
                });
            }
            const img = req.file.filename; 

            const data = await db.query(
                `INSERT INTO mentor_profile_form (
                    name, DOB, contact, linked_in, permanent_add, img, gender, 
                    email, job_title, edu_qual, company, field, topics, 
                    per_website, availability
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    name, DOB, contact, linked_in, permanent_add, img, gender, 
                    email, job_title, edu_qual, company, field, topics, 
                    per_website, availability
                ]
            );
            if (!data) {
                return res.status(500).send({
                    success: false,
                    message: "ERROR in INSERT query",
                });
            }
            return res.status(201).send({
                success: true,
                message: "Data has been inserted successfully",
            });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send({
                success: false,
                message: "ERROR in INSERTING data",
                error: error.message,
            });
        }
   
};


// UPDATING INVESTOR DATA
export const updateMentor = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Image upload failed",
          error: err.message,
        });
      }
  
      try {
        const id = req.params.id;
        if (!id) {
          return res.status(400).send({
            success: false,
            message: "Invalid ID or ID is required",
          });
        }
  
        const {
            name, dob, contact, linked_in, permanent_add, gender, email,
            job_title, edu_qual, company, field, topics, per_website, availability
        } = req.body;
  
        // Check if a new photo was uploaded
        const img = req.file ? req.file.filename : null;
  
        // UPDATE DATA IN DATABASE
        const data = await db.query(
          `UPDATE mentor_profile_form SET 
                      name=?, dob=?, contact=?, linked_in=?, permanent_add=?, 
                      ${img ? "img=?, " : ""} 
                      gender=?, email=?, job_title=?, edu_qual=?, 
                      company=?, field=?, topics=?, per_website=?,
                      availability=?
                  WHERE id=?;`,
          img
            ? [
                name,img, dob, contact, linked_in, permanent_add, gender, email,
            job_title, edu_qual, company, field, topics, per_website, availability,
                id,
              ]
            : [
                name, dob, contact, linked_in, permanent_add, gender, email,
                job_title, edu_qual, company, field, topics, per_website, availability,
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
          message: "Error updating MENTORE data",
          error: error.message,
        });
      }
    });
  };
  
  // DELETING INVESTOR DATA
  
  export const MentorDelete = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).send({
          success: false,
          message: "please provide ID or VALID ID",
        });
      }
  
      const data = await db.query(`DELETE FROM mentor_profile_form WHERE id=?`, [
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
        message: "ERROR IN DELETING MENTOR FORM DATA ",
      });
    }
  };
  


  // get mentor data in data

  export const getMentor = async (req, res) => {
    try {
      // Updating data in the database
      const result = await db.query(
        `SELECT * from mentor_profile_form`
      );
      res.status(200).send({
        success: true,
        message: "Get All Data successfully",
        data:result[0],
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "ERROR in Getting data",
        error,
      });
    }
  };
  


  export const getMentorEdit = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "INVALID ID or provide ID",
      });
    }
    // Updating data in the database
    const data = await db.query(
      `SELECT * from mentor_profile_form where id=?`,[id]
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