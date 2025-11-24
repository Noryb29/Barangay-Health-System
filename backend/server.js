import express from "express";
import { patientRoutes } from "./routes/PatientRoutes.js";
import cors from "cors";
import { db } from "./db/dbConnection.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Important to parse JSON

// Routes
app.use("/api/patient", patientRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
 
});
