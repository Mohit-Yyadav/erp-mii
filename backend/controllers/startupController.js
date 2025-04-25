import db from "../config/db.js";
import upload from "../config/multerConfig.js";

// INSERTING DATA
export const insert_startup = async (req, res) => {
  upload.single("picture")(req, res, async (err) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Error in uploading image",
        error: err.message,
      });
    }

    try {
      const {
        name,
        dob,
        contact,
        linked_in,
        gender,
        email,
        permanent_add,
        founder_id,
        designation,
        comp_website,
        comp_name,
        comp_establish_date,
        industry_type,
        prev_work_experience,
        edu_qual,
        notable_achive,
        media,
        skills,
      } = req.body;

      const requiredFields = [
        "name", "dob", "contact", "linked_in", "gender",
        "email", "permanent_add", "founder_id", "designation",
        "comp_website", "comp_name", "comp_establish_date", "industry_type",
        "prev_work_experience", "edu_qual", "notable_achive", "media", "skills"
      ];

      const missingFields = requiredFields.filter(field => !req.body[field] || req.body[field].trim() === "");

      if (missingFields.length > 0) {
        return res.status(400).send({
          success: false,
          message: "All fields are required",
          missingFields,
        });
      }

      if (!req.file) {
        return res.status(400).send({
          success: false,
          message: "Profile picture is not uploaded",
        });
      }

      const picture = req.file.filename;

      const data = await db.query(
        `INSERT INTO startup_profile (
          name, dob, contact, linked_in, picture, gender,
          email, permanent_add, founder_id, designation,
          comp_website, comp_name, comp_establish_date, industry_type,
          prev_work_experience, edu_qual, notable_achive, media, skills
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          name, dob, contact, linked_in, picture, gender,
          email, permanent_add, founder_id, designation,
          comp_website, comp_name, comp_establish_date, industry_type,
          prev_work_experience, edu_qual, notable_achive, media, skills
        ]
      );

      return res.status(201).send({
        success: true,
        message: "Data has been inserted successfully",
      });

    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in inserting data",
        error,
      });
    }
  });
};

// UPDATING DATA
export const update_startup = async (req, res) => {
  upload.single("picture")(req, res, async (err) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "File upload failed",
        error: err.message,
      });
    }

    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).send({
          success: false,
          message: "Invalid ID or ID not provided",
        });
      }

      const {
        name,
        dob,
        contact,
        linked_in,
        gender,
        email,
        permanent_add,
        founder_id,
        designation,
        comp_website,
        comp_name,
        comp_establish_date,
        industry_type,
        prev_work_experience,
        edu_qual,
        notable_achive,
        media,
        skills
      } = req.body;

      const picture = req.file ? req.file.filename : null;

      const data = await db.query(
        `UPDATE startup_profile SET 
          name = ?, dob = ?, contact = ?, linked_in = ?, gender = ?,
          email = ?, permanent_add = ?, founder_id = ?, designation = ?,
          comp_website = ?, comp_name = ?, comp_establish_date = ?, industry_type = ?,
          prev_work_experience = ?, edu_qual = ?, notable_achive = ?, media = ?, skills = ?,
          picture = COALESCE(?, picture)
        WHERE id = ?`,
        [
          name, dob, contact, linked_in, gender,
          email, permanent_add, founder_id, designation,
          comp_website, comp_name, comp_establish_date, industry_type,
          prev_work_experience, edu_qual, notable_achive, media, skills,
          picture, id
        ]
      );

      res.status(200).send({
        success: true,
        message: "Data updated successfully",
        data,
      });

    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in updating data",
        error,
      });
    }
  });
};

// DELETING DATA
export const deletestartup = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: 'Please provide a valid ID',
      });
    }
    await db.query('DELETE FROM startup_profile WHERE id = ?', [id]);
    res.status(200).send({
      success: true,
      message: 'Data deleted successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in deleting data',
      error,
    });
  }
};
