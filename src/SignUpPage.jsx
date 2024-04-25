// SignUpPage.js
import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';

const SignUpPage = () => {
  const handleSuccess = (response) => {
    // Handle successful sign-up
    console.log('Successful sign-up:', response);
  };

  const handleFailure = (error) => {
    // Handle sign-up failure
    console.error('Sign-up error:', error);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <p>Sign up with your Google account:</p>
      <GoogleLoginButton onSuccess={handleSuccess} onFailure={handleFailure} />
    </div>
  );
};

export default SignUpPage;
