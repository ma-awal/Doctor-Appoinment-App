import express from 'express';
import { 
    createAppointment, 
    getAppointments, 
    updateAppointmentStatus, 
    deleteAppointment ,
    completeAppointment
  } from '../controllers/appointmentController.js';
  
  const router = express.Router();
  
  router.post('/', createAppointment);
  router.get('/', getAppointments);
  router.patch('/:id', updateAppointmentStatus);  
  router.delete('/:id', deleteAppointment);  
  router.patch('/complete/:id', completeAppointment)
  
  export default router;