import db from "../config/db.js";
import  checkMissingFields  from "../utils/checkMissingFields.js";

// INSERTING INVESTOR DATA
export const insertInvestor = async (req, res) => {
  try {
    const requiredFields = [
        "name",
        "date_of_birth",
        "contact_number",
        "linked_in_profile",
        "permanent_add",
        "gender",
        "email",
        "industry_type",
        "company_name",
        "company_web",
        "year_of_experience",
        "establishment_date",
        "no_of_startup",
        "investment_sector",
        "investment_stage",
        "investment_range"
    ];

       const validationError = checkMissingFields(requiredFields, req.body);
       if (validationError) {
           return res.status(400).json(validationError);
       }

    if (!req.file) {
      return res.status(400).send({
        success: false,
        message: "Profile picture is required",
      });
    }

    const photo = req.file.filename;

    // Insert into Database
    const data = await db.query(
      `INSERT INTO investor_profile (
                name, date_of_birth, contact_num,  photo, gender, email_ID,per_add,industry_type, company_name,company_web,
                investment_year,establishment_date, num_of_startup, investment_sector,  investment_stage,  investment_range
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?);`,
      [
        req.body.name,
        req.body.date_of_birth,
        req.body.contact_number,
        req.body.linked_in_profile,
        photo,
        req.body.gender,
        req.body.email,
        req.body.permanent_add,
        req.body.industry_type,
        req.body.company_name,
        req.body.company_web,
        req.body.year_of_experience,
        req.body.establishment_date,
        req.body.no_of_startup,
        req.body.investment_sector,
        req.body.investment_stage,
        req.body.investment_range,
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
export const updateInvestor = async (req, res) => {
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
        name,
        date_of_birth,
        contact_num,
        linked_in_profile,
        per_add,
        gender,
        email_ID,
        industry_type,
        company_name,
        company_web,
        investment_year,
        establishment_date,
        num_of_startup,
        investment_sector,
        investment_stage,
        investment_range,
      } = req.body;

      // Check if a new photo was uploaded
      const photo = req.file ? req.file.filename : null;

      // UPDATE DATA IN DATABASE
      const data = await db.query(
        `UPDATE investor_profile SET 
                    name=?, date_of_birth=?, contact_num=?, linked_in_profile=?, per_add=?, 
                    ${photo ? "photo=?, " : ""} 
                    gender=?, email_ID=?, industry_type=?, company_name=?, 
                    company_web=?, investment_year=?, establishment_date=?, num_of_startup=?, 
                    investment_sector=?, investment_stage=?, investment_range=? 
                WHERE id=?;`,
        photo
          ? [
              name,
              date_of_birth,
              contact_num,
              linked_in_profile,
              per_add,
              photo,
              gender,
              email_ID,
              industry_type,
              company_name,
              company_web,
              investment_year,
              establishment_date,
              num_of_startup,
              investment_sector,
              investment_stage,
              investment_range,
              id,
            ]
          : [
              name,
              date_of_birth,
              contact_num,
              linked_in_profile,
              per_add,
              gender,
              email_ID,
              industry_type,
              company_name,
              company_web,
              investment_year,
              establishment_date,
              num_of_startup,
              investment_sector,
              investment_stage,
              investment_range,
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
  });
};

// DELETING INVESTOR DATA

export const deleteInvestor = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "please provide ID or VALID ID",
      });
    }

    const data = await db.query(`DELETE FROM investor_profile WHERE id=?`, [
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
      message: "ERROR IN DELETING INVESTOR FORM DATA ",
    });
  }
};
