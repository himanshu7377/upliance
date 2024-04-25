// GoogleLoginButton.js

import React from 'react';
import { auth } from './firebase.js';
import { Navigate, useNavigate } from 'react-router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import GoogleAuthProvider and signInWithPopup from firebase/auth

const GoogleLoginButton = () => {
  const navigate=useNavigate()
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider(); // Use GoogleAuthProvider from firebase/auth
      await signInWithPopup(auth, provider); // Use signInWithPopup from firebase/auth with the auth instance
      // Handle successful login
      console.log("login successful")
        navigate('/dashboard')
    } catch (error) {
      console.error('Google login error:', error);
      // Handle login error
      navigate('/signin')
    }
  };

  return (
    <button onClick={handleGoogleLogin}>Login with Google</button>
  );
};

export default GoogleLoginButton;
