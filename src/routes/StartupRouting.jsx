import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Startup = () => {
  return (
    <Routes>
        <Route path="/startup" element={<StartupPage />} />
    </Routes>
  )
}

export default Startup
