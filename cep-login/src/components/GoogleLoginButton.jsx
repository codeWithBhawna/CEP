import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function GoogleLoginButton() {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('User Info:', decoded);

      const userName = decoded.name;

      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify(decoded));

      alert(`Welcome, ${userName}!`);

      // Navigate to onboarding with state
      navigate('/onboarding', { state: { userName } });
    } catch (error) {
      console.error('Decoding error:', error);
      alert('Something went wrong while processing your login. Please try again.');
    }
  };

  const handleError = () => {
    console.error('Login Failed');
    alert('Google Login Failed. Please try again!');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
}

export default GoogleLoginButton;
