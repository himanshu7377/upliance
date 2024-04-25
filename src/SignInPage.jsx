import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';

const SignInPage = () => {
  const handleSuccess = (response) => {
    // Handle successful sign-in
    console.log('Successful sign-in:', response);
  };

  const handleFailure = (error) => {
    // Handle sign-in failure
    console.error('Sign-in error:', error);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <p>Sign in with your Google account:</p>
      <GoogleLoginButton onSuccess={handleSuccess} onFailure={handleFailure} />
    </div>
  );
};

export default SignInPage;
