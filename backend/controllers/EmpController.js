import db from "../config/db.js";
import upload from "../config/multerConfig.js";


// Multer Configuration
upload.single("picture"); // Accept single file upload with field name 'picture' 

// Insert Employee Data
export const emp_Insert = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send({
                success: false,
                message: "File upload failed",
                error: err.message,
            });
        }

        try {
            const {
                name,
                dob,
                gender,
                contact,
                email,
                curr_address,
                per_address,
                emp_id,
                department,
                designation,
                date_of_joining,
                emp_type,
                work_location,
                shift_timing,
                ctc,
                bank_no,
                account_no,
                ifsc_no,
                pf_no,
                pan_no
            } = req.body; 
            
            // Validate required fields
            const requiredFields = [
                "name", "dob", "gender", "contact", "email",
                "curr_address", "per_address", "emp_id", "department",
                "designation", "date_of_joining", "emp_type",
                "work_location", "shift_timing", "ctc", "bank_no",
                "account_no", "ifsc_no", "pf_no", "pan_no"
            ];

            const missingFields = requiredFields.filter(field => !req.body[field] || req.body[field].trim() === "");

            if (missingFields.length > 0) {
                return res.status(400).send({
                    success: false,
                    message: "All fields are required",
                    missingFields,
                });
            }

            // Ensure file is uploaded
            if (!req.file) {
                return res.status(400).send({
                    success: false,
                    message: "Profile picture is required",
                });
            }

            const picture = req.file.filename; // Get the uploaded image filename

            // Insert Data into Database
            const data = await db.query(
                `INSERT INTO employee (
                    name, picture, dob, gender, contact, email, 
                    curr_add, per_add, emp_id, department, designation, 
                    date_joing, emp_type, work_location, shift_time, 
                    ctc, bank_name, acc_no, ifsc, pf_no, pan_id
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                [
                    name, picture, dob, gender, contact, email,
                    curr_address, per_address, emp_id, department, 
                    designation, date_of_joining, emp_type, 
                    work_location, shift_timing, ctc, bank_no, 
                    account_no, ifsc_no, pf_no, pan_no
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
    });
};




// updating code in Employee form 

export const update_emp_data = async (req, res) => {
    upload(req, res, async (err) => {
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
          message: "INVALID ID or provide ID",
        });
      }
  
      const {
        name,
        dob,
        gender,
        contact,
        email,
        curr_address,
        per_address,
        emp_id,
        department,
        designation,
        date_of_joining,
        emp_type,
        work_location,
        shift_timing,
        ctc,
        bank_no,
        account_no,
        ifsc_no,
        pf_no,
        pan_no
      } = req.body;
      const picture = req.file ? req.file.filename : null;
  
      // Updating data in the database
      const data = await db.query(
        `UPDATE employee SET 
          name = ?, 
          dob = ?, 
          gender = ?, 
          contact = ?, 
          email = ?, 
          curr_add = ?, 
          per_add = ?, 
          emp_id = ?, 
          department = ?, 
          designation = ?, 
          date_joing = ?, 
          emp_type = ?, 
          work_location = ?, 
          shift_time = ?, 
          ctc = ?, 
          bank_name = ?, 
          acc_no = ?, 
          ifsc = ?, 
          pf_no = ?,
          pan_id = ?,
          picture = COALESCE(?, picture)
        WHERE id = ?`,
        [
            name,
            dob,
            gender,
            contact,
            email,
            curr_address,
            per_address,
            emp_id,
            department,
            designation,
            date_of_joining,
            emp_type,
            work_location,
            shift_timing,
            ctc,
            bank_no,
            account_no,
            ifsc_no,
            pf_no,
            pan_no,
            picture,
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
});  
};


// DELETING DATA
export const delete_employee_Data = async (req,res)=>{
    try{
        const id = req.params.id
        if(!id){
          return res.status(404).send({
            success:false,
            message:'please provide ID or VALID ID',
          });
        }
        const data = await db.query ('DELETE FROM employee WHERE id=?',[id]);
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

