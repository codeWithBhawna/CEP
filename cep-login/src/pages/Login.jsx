import React from 'react';
import GoogleLoginButton from '../components/GoogleLoginButton';
import './Login.css';

function LoginPage() {
  return (
    <div className="container">
      <div className="left">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Background"
          className="background-image"
        />
      </div>
      <div className="right">
        <h2>Signup  with Google</h2>
        <GoogleLoginButton />
      </div>
    </div>
  );
}

export default LoginPage;
