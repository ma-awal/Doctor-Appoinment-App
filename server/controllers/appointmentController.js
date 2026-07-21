import Appointment from "../models/Appointment.js";

// @desc    Create new appointment (Business Ready)
// @route   POST /api/appointments
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;
      next();
    } catch (error) {
      console.error("JWT Verify Error:", error.message);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};

export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Admin access only" });
  }
};

// @desc    Get all appointments (For Admin Dashboard)
// @route   GET /api/appointments
export const getAppointments = async (req, res) => {
  try {
    let query = {};

    if (req.user && req.user.role !== "admin") {
      query = { patientId: req.user.id };
    }

    const appointments = await Appointment.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Update appointment status (Confirm/Cancel) -
// @route   PATCH /api/appointments/:id
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appointment) {
      return res
        .status(404)
        .json({ success: false, message: "Appointment not found" });
    }

    res.status(200).json({
      success: true,
      message: `Appointment marked as ${status}`,
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Delete appointment
// @route   DELETE /api/appointments/:id
export const deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Add Medical Record & Complete Appointment
// @route   PATCH /api/appointments/complete/:id
export const completeAppointment = async (req, res) => {
  try {
    const { prescription, testReports, cost } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        prescription,
        testReports,
        cost,
        status: "Completed",
        completedAt: new Date(),
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Visit completed & report added!",
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
