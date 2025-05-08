import db from "../config/db.js";
import checkMissingFields from "../utils/checkMissingFields.js"
// INSERTING DATA
export const insertMainFormData = async (req, res) => {
  try {
    const {
        name, 
        studentID,
        email,
        phone_number,
        department,
        year_of_study,
        startup_name,
        industry_sector,
        description,
        problemStatementAndSolution,
        currentStage,
        website_socialMedia,
        checkboxId,
        expected_investment,
        revenue_model,
        competition_analysis,
        office_space,
        mentorship,
        networking
    } = req.body;
    
    const requiredFields = [
        "name",
        "studentID",
        "email",
        "phone_number",
        "department",
        "year_of_study",
        "startup_name",
        "industry_sector",
        "description",
        "problemStatementAndSolution",
        "currentStage",
        "website_socialMedia",
        "checkboxId",
        "expected_investment",
        "revenue_model",
        "competition_analysis",
        "office_space",
        "mentorship",
        "networking"
    ];
    const validationError = checkMissingFields(requiredFields, req.body);
    if (validationError) {
        return res.status(400).json(validationError);
    }


    
    const data = await db.query(
      `INSERT INTO startup (personal_name,student_id,email_id,phone,dept,year,startup_name,industry,description,problem_soln,stage,lwebsite,fun_required,invesment,revenue,analysis,office_space,mentorship,networking) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[
        name,
        studentID,
        email,
        phone_number,
        department,
        year_of_study,
        startup_name,
        industry_sector,
        description,
        problemStatementAndSolution,
        currentStage,
        website_socialMedia,
        checkboxId,
        expected_investment,
        revenue_model,
        competition_analysis,
        office_space,
        mentorship,
        networking
      ]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "ERROR in INSERT query",
      });
    }
     return res.status(201).send({
        success: true,
        message: "data has been INSERTED successfully",
      });
    }
   catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "ERROR in INSERTING data",
      error,
    });
  }
};

// UPDATING DATA
export const updateMainFormData = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "INVALID ID or provide ID",
      });
    }

    const {
      name,
      studentID,
      email,
      phone_number,
      department,
      year_of_study,
      startup_name,
      industry_sector,
      description,
      problemStatementAndSolution,
      currentStage,
      website_socialMedia,
      checkboxId,
      expected_investment,
      revenue_model,
      competition_analysis,
      office_space,
      mentorship,
      networking,
    } = req.body;

    // Updating data in the database
    const data = await db.query(
      `UPDATE erp SET 
        name = ?, 
        studentID = ?, 
        email = ?, 
        phone_number = ?, 
        department = ?, 
        year_of_study = ?, 
        startup_name = ?, 
        industry_sector = ?, 
        description = ?, 
        problemStatementAndSolution = ?, 
        currentStage = ?, 
        website_socialMedia = ?, 
        checkboxId = ?, 
        expected_investment = ?, 
        revenue_model = ?, 
        competition_analysis = ?, 
        office_space = ?, 
        mentorship = ?, 
        networking = ? 
      WHERE id = ?`,
      [
        name,
        studentID,
        email,
        phone_number,
        department,
        year_of_study,
        startup_name,
        industry_sector,
        description,
        problemStatementAndSolution,
        currentStage,
        website_socialMedia,
        checkboxId,
        expected_investment,
        revenue_model,
        competition_analysis,
        office_space,
        mentorship,
        networking,
        id
      ]
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

export const getMainFormData = async (req, res) => {
  try {
    // Updating data in the database
    const result = await db.query(
      `SELECT * from startup`
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

export const getMainFormEdit = async (req, res) => {
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
      `SELECT * from startup where id=?`,[id]
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
 export const deleteMainFormData = async (req,res)=>{
  try{
      const id = req.params.id
      if(!id){
        return res.status(404).send({
          success:false,
          message:'please provide ID or VALID ID',
        });
      }
      const data = await db.query ('DELETE FROM erp WHERE id=?',[id]);
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