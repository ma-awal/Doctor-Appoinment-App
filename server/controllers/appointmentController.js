import Appointment from '../models/Appointment.js';

// @desc    Create new appointment
// @route   POST /api/appointments
export const createAppointment = async (req, res) => {
  try {
    const { fullName, email, doctorName, date, message } = req.body;

    const appointment = await Appointment.create({
      fullName,
      email,
      doctorName,
      date,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully!',
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Validation failed or Server Error',
      error: error.message,
    });
  }
};

// @desc    Get all appointments
// @route   GET /api/appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};