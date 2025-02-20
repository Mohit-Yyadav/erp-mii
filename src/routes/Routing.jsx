import React from 'react'
import { Route,Routes } from 'react-router-dom'
import MainForm from '../components/MainForm'
import Startup from './StartupRouting'
import StartupAdminRouting from './StartupAdminRouting'
import SuperAdminRouting from './SuperAdminRouting'

const Routing = () => {
  return (
     <Routes>
      <Route path="/super-admin" element={<SuperAdminRouting />} />
      <Route path="/" element={<MainForm />} />
      <Route path="/startup/*" element={<Startup />} />
      <Route path="/startup-admin" element={<StartupAdminRouting />} />
    </Routes>
  )
}

export default Routing;
