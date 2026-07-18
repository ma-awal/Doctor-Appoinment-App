import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "https://doctor-appointment-app-nine.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} request received at: ${req.url}`);
  next();
});

app.get("/api/test", (req, res) => {
  res.status(200).json({ success: true, message: "API is fully working!" });
});

app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.status(200).send("CarePulse Server is Live and Working Fine!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
