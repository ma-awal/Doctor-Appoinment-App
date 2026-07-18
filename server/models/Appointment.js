import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    doctorName: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;