import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; // Assuming you have Firebase authentication set up
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const navigate=useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const hanleredirect=()=>{
    console.log('redirect from dashboard')
    navigate('/signin')
  }
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  console.log("working")

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          {user.photoURL && <img src={user.photoURL} alt="Profile" />}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
        <p>Please sign in to view this page.</p>
        <button onClick={hanleredirect}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
