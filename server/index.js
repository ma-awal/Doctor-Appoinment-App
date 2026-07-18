import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working perfectly!" });
});

// ৩. আপনার মেইন রুট
app.use("/api/appointments", appointmentRoutes);

// ৪. হোম রুট
app.get("/", (req, res) => {
  res.send("CarePulse Server is Live...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
