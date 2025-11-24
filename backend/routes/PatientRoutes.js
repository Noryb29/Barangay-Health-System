import express from "express";
import { getAllPatients, insertPatient } from "../controllers/patientControllers.js";

export const patientRoutes = express.Router();

patientRoutes.get("/",getAllPatients);
patientRoutes.post("/",insertPatient);