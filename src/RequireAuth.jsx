import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; 

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
        navigate('/signin'); // Redirect to the SignInPage if user is not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return ( <>{user && children}</>); 
};

export default RequireAuth;
