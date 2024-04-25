import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for routing
import { auth } from './firebase'; // Assuming you have Firebase authentication set up

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        console.log("u are not login")
        // navigate('/signin'); // Redirect to the SignInPage if user is not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return ( <>{user && children}</>); // Render children only if user is authenticated
};

export default RequireAuth;
