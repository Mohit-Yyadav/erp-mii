import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PublicRoutes = () => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const roleData = JSON.parse(localStorage.getItem("role") || "{}");
    const role = roleData?.role_name?.toLowerCase?.();

    if (storedUser) {
      switch (role) {
        case "human resource":
          navigate("/human-resource", { replace: true });
          break;
        case "super admin":
          navigate("/super-admin", { replace: true });
          break;
        default:
          navigate("/not-authorized", { replace: true });
          break;
      }
    } else {
      setIsChecking(false); // No stored user, allow outlet (public route)
    }
  }, [navigate]);

  if (isChecking) return null; // or a spinner, loader, etc

  return <Outlet />;
};

export default PublicRoutes;
