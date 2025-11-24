import { db } from "../db/dbConnection.js";

export const getAllPatients = async (req,res)=>{

    try{
        const[rows] = await db.execute(
            "SELECT * FROM patients"
        );
        res.json(rows)
    }catch(err){
        res.status(500).json({err : err.message});
    }
};

//INSERT NEW PATIENT
export const insertPatient = async (req,res) =>{
    const {patientFirstname,patientLastname,patientAge,patientAddress,patientGender,patientConsultationId,isActive,hasInsurance} = req.body
    try{
        const [result] = await db.execute(
        "INSERT INTO patients(patient_firstname,patient_lastname,patient_age,patient_address,patient_gender,patient_consultation_id,isActive,hasInsurance) VALUES (?,?,?,?,?,?,?,?)"
        ,[patientFirstname,patientLastname,patientAge,patientAddress,patientGender,patientConsultationId,isActive,hasInsurance]
        );
        res.json({success : true, id : result.insertId});
    }catch(err){
        res.status(500).json({err : err.message});
    }
}