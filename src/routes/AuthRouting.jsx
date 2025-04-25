import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "../components/auth/Login";
import OtpVerification from '../components/auth/OtpVerification';

function AuthRouting() {
  const [sessionData,setSessionData] = useState(null)
  return (
    <Routes>
      <Route path="/login" element={<Login setSessionData={setSessionData} />} />
      <Route path="/otp-verification"element={<OtpVerification sessionData={sessionData}/>}/>
    </Routes>
  );
}

export default AuthRouting;
