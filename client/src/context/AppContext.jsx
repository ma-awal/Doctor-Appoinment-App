import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const API_URL =
    "https://doctor-appointment-app-4d5o.onrender.com/api/appointments";

  const bookAppointment = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(API_URL, formData);
      toast.success(response.data.message);

      await fetchAppointments();

      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Booking Failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setAppointments(response.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{ bookAppointment, appointments, fetchAppointments, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};
