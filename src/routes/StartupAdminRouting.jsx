import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/startup_admin/Dashboard'

const StartupAdminRouting = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default StartupAdminRouting
