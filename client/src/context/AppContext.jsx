import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const API_URL =
    "https://doctor-appoinment-app-4d5o.onrender.com/api/appointments";

  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const bookAppointment = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(API_URL, formData, getAuthHeader());
      toast.success(response.data.message);
      await fetchAppointments();
      return true;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Booking Failed. Please login again."
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  const fetchAppointments = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);
    try {
      const response = await axios.get(API_URL, getAuthHeader());
      setAppointments(response.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (id, status) => {
    try {
      const res = await axios.patch(
        `${API_URL}/${id}`,
        { status },
        getAuthHeader()
      );
      toast.success(res.data.message);
      fetchAppointments();
    } catch (err) {
      toast.error("Update failed. You might not have permission.");
    }
  };

  const completeVisit = async (id, medicalData) => {
    try {
      const res = await axios.patch(
        `${API_URL}/complete/${id}`,
        medicalData,
        getAuthHeader()
      );
      toast.success(res.data.message);
      fetchAppointments();
    } catch (err) {
      toast.error("Failed to complete visit.");
    }
  };

  const deleteAppointment = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await axios.delete(`${API_URL}/${id}`, getAuthHeader());
        toast.success("Deleted successfully");
        fetchAppointments();
      } catch (err) {
        toast.error("Delete failed");
      }
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
