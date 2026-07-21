import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "https://doctor-appoinment-app-nine.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request received at: ${req.url}`);
  next();
});

app.get("/api/test", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "CarePulse API is fully working!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.status(200).send("CarePulse Server is Live and Working Fine!");
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
