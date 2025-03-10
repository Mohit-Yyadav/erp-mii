import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../components/startup/Profile";
import Dashboard from "../components/startup/Dashboard";
import Startupdirective from "../components/startup/Startup_directory";
import StartupProfileForm from "../components/startup/StartupForm";

const Startup = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/startup-directory" element={<Startupdirective />} />
        <Route path="/startup-Form" element={<StartupProfileForm/>} />
    </Routes>
  )
}

export default Startup