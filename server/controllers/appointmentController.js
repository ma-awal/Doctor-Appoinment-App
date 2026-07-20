import Appointment from '../models/Appointment.js';

// @desc    Create new appointment (Business Ready)
// @route   POST /api/appointments
export const createAppointment = async (req, res) => {
  try {
 
    const { fullName, email, phone, age, gender, doctorName, date, reason } = req.body;

    const appointment = await Appointment.create({
      fullName,
      email,
      phone,
      age,
      gender,
      doctorName,
      date,
      reason,
      status: 'Pending'  
    });

    res.status(201).json({
      success: true,
      message: 'Appointment submitted successfully! Please wait for confirmation.',
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Booking failed. Please check all fields.',
      error: error.message,
    });
  }
};

// @desc    Get all appointments (For Admin Dashboard)
// @route   GET /api/appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
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
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    res.status(200).json({
      success: true,
      message: `Appointment marked as ${status}`,
      data: appointment
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
    res.status(200).json({ success: true, message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


// @desc    Add Medical Record & Complete Appointment
// @route   PATCH /api/appointments/complete/:id
export const completeAppointment = async (req, res) => {
  try {
    const { prescription, testReports } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { 
        prescription, 
        testReports, 
        status: 'Completed',
        completedAt: new Date()
      },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Visit completed & report added!", data: appointment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};