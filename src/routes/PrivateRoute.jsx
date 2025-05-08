import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/ContextApi';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../components/loader/Loader'

const PrivateRoute = ({ allowedRole }) => {
  const { user, role } = useAuth();

  const [isChecking, setIsChecking] = useState(true);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedRole = JSON.parse(localStorage.getItem("role"));

  const currentUser = user || storedUser;

  const rawRole =
  (typeof role?.role_name === "string" && role.role_name) ||
  (typeof storedRole?.role_name === "string" && storedRole.role_name) ||
  (typeof storedRole?.role_name?.role_name === "string" && storedRole.role_name.role_name) ||
  "";

  const currentRole = rawRole?.toLowerCase?.();
  const expectedRole = allowedRole?.toLowerCase?.();

  useEffect(() => {
    // Simulate loading state; delay check till values are fetched
    const timer = setTimeout(() => setIsChecking(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isChecking) return <Loader/>;

  // Not logged in
  if (!currentUser || !currentRole) {
    return <Navigate to="/auth/login" />;
  }

  // Wrong role
  if (expectedRole && currentRole !== expectedRole) {
    return <Navigate to="/not-authorized" />;
  }

  // ✅ All good
  return <Outlet />;
};

export default PrivateRoute;
