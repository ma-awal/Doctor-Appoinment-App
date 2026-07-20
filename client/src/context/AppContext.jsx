import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const API_URL =
    "https://doctor-appoinment-app-4d5o.onrender.com/api/appointments";

  const bookAppointment = async (formData) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        API_URL,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        formData
      );
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
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAppointments(response.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
      if (error.response?.status === 401) logout();
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (id, status) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.patch(
        `${API_URL}/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        { status }
      );
      toast.success(res.data.message);
      fetchAppointments();
    } catch (err) {
      toast.error("Update failed");
    }
  };

  const deleteAppointment = async (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        const res = await axios.delete(`${API_URL}/${id}`);
        toast.success(res.data.message);
        fetchAppointments();
      } catch (err) {
        toast.error("Delete failed");
      }
    }
  };

  const completeVisit = async (id, medicalData) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.patch(
        `${API_URL}/complete/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        medicalData
      );
      toast.success(res.data.message);
      fetchAppointments();
    } catch (err) {
      toast.error("Failed to add report");
    }
  };

  return (
    <AppContext.Provider
      value={{
        bookAppointment,
        appointments,
        fetchAppointments,
        loading,
        updateAppointmentStatus,
        deleteAppointment,
        completeVisit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
