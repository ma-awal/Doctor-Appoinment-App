import express from "express";
import {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment,
  completeAppointment,
} from "../controllers/appointmentController.js";
import { protect } from "../middleware/authMiddleware.js";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/", protect, createAppointment);
router.get("/", protect, getAppointments);
router.patch("/:id", protect, updateAppointmentStatus);
router.delete("/:id", protect, deleteAppointment);
router.patch("/complete/:id", protect, completeAppointment);

export default router;
