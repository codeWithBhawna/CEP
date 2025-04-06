import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from './pages/Login'; 
import Onboarding from './components/Onboarding';
import Dashboard from './pages/Dashboard ';

function App() {
  return (
    <GoogleOAuthProvider clientId="922557530329-aho46fkgv474ble9jaae712r2n8dvr8u.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
