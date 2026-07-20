 // server/models/Appointment.js
import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }, 
    age: { type: Number, required: true }, 
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true }, 
    doctorName: { type: String, required: true },
    date: { type: Date, required: true },
    reason: { type: String }, 
    status: { 
      type: String, 
      enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'], 
      default: 'Pending' 
    }, 
    prescription: { type: String, default: "" },  
testReports: { type: String, default: "" },  
completedAt: { type: Date },
patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
cost: { type: Number, default: 0 }, 
  }, { timestamps: true }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;