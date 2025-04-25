import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "./Axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create Auth Context
const AuthContext = createContext();

export const ContextApi = ({ children }) => {
   const navigate = useNavigate()
  const [user, setUser] = useState(null); 
  const [role, setRole] = useState(null); // Set default value to null

  // Check session from API and localStorage
  const sessionChecker = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const localRole = JSON.parse(localStorage.getItem("role"));

    try {
      const sessionData = await Axios.get("/api/auth/me");
      const sessionUser = sessionData.data.user;
      const sessionRole = sessionData.data.role // Extract user data from API response

      if (JSON.stringify(localUser) !== JSON.stringify(sessionUser) && JSON.stringify(localRole) !== JSON.stringify(sessionRole)) {
        console.log("❌ API session and localStorage do not match");
        setUser(null);
        setRole(null);
        localStorage.removeItem("user");
        localStorage.removeItem("role");
      } 
      setRole(sessionRole || null);
      setUser(sessionUser || null);
    } catch (error) {
        toast.error("❌ No active session")
        setUser(null);
        setRole(null);
        localStorage.removeItem("user");
        localStorage.removeItem("role"); // Remove if session expired
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");
    if (storedUser && storedRole) {
      sessionChecker()
    } 
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData.user);
    setRole(userData.role)
    localStorage.setItem("user", JSON.stringify(userData?.user));
    localStorage.setItem("role", JSON.stringify(userData?.role)); // Store in localStorage
  };

  // Logout function
  const logout = async () => {
    try {
      // Send logout request to API to clear session or invalidate token
      await Axios.post('/api/auth/logout');
      // Clear localStorage and context
      setUser(null);
      setRole(null);
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      navigate("/auth/login")
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
