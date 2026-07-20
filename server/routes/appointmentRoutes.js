import express from 'express';
import { 
    createAppointment, 
    getAppointments, 
    updateAppointmentStatus, 
    deleteAppointment 
  } from '../controllers/appointmentController.js';
  
  const router = express.Router();
  
  router.post('/', createAppointment);
  router.get('/', getAppointments);
  router.patch('/:id', updateAppointmentStatus); // স্ট্যাটাস বদলানোর জন্য
  router.delete('/:id', deleteAppointment); // ডিলিট করার জন্য
  
  export default router;