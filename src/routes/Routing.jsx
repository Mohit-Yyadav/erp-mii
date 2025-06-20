import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainForm from '../components/MainForm';
import HRDashboard from '../components/human_resource/Dashboard';
import StartupDashboard from '../components/dashboard_components/Dashboard';
import SuperAdminDashboard from '../components/super_admin/Dashboard';
import AuthRouting from './AuthRouting';
import PublicRoutes from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainForm />} />

      {/* Public routes */}
      <Route element={<PublicRoutes />}>
        <Route path="/auth/*" element={<AuthRouting />} />
        <Route path="/startup/*" element={<StartupDashboard />} />
      </Route>

      {/* Private routes with role restrictions */}
      <Route element={<PrivateRoute allowedRole="super admin" />}>
        <Route path="/super-admin/*" element={<SuperAdminDashboard />} />
      </Route>

      <Route element={<PrivateRoute allowedRole="human resource" />}>
        <Route path="/human-resource/*" element={<HRDashboard />} />
      </Route>

      {/* Fallback or 404 */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default Routing;
