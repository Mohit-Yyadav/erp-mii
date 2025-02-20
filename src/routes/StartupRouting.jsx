import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../components/startup/Profile'
import Dashboard from '../components/startup/Dashboard'

const Startup = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default Startup
