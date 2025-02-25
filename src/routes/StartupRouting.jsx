<<<<<<< HEAD
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../components/startup/Profile'
import Dashboard from '../components/startup/Dashboard'
import Startup_directory from '../components/startup/Startup_directory'
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../components/startup/Profile";
import Dashboard from "../components/startup/Dashboard";
>>>>>>> 532bb22717ce255f9a180a6ed80d0223c33fd6f1

const Startup = () => {
  return (
    <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/startup-directory" element={<Startup_directory />} />
=======
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
>>>>>>> 532bb22717ce255f9a180a6ed80d0223c33fd6f1
    </Routes>
  );
};

export default Startup;
