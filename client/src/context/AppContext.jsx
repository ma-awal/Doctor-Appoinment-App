import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const bookAppointment = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/appointments", formData);
      toast.success(response.data.message);
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
      const response = await axios.get("http://localhost:5000/api/appointments");
      setAppointments(response.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ bookAppointment, appointments, fetchAppointments, loading  }}>
      {children}
    </AppContext.Provider>
  );
};