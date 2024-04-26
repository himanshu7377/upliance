import React, { useState, useEffect } from 'react';
import { auth } from '../firebase.js'; // Assuming you have Firebase authentication set up
import { useNavigate } from 'react-router';
import { Bar } from 'react-chartjs-2'; // Import the Bar component from react-chartjs-2
import './Dashboard.css';
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale } from "chart.js";

Chart.register(CategoryScale,LinearScale);

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Sample chart data and options
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [5, 10, 5, 2, 20, 30, 45],
    }]
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        beginAtZero: true,
        scale: {
          type: CategoryScale,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: true,
        scale: {
          type: LinearScale,
        },
      },
    },
  };

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

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleRedirect = () => {
    console.log('Redirecting from dashboard');
    navigate('/signin');
  };

  console.log(user)

  return (
    <div className="dashboard">
      <h1 className='user-details'>User Details</h1>
      <div className='dashboard-container'>
      <div className="chart-container">
        <Bar data={data} options={chartOptions} />
      </div>
      <div className="user-info">
        {user ? (
          <div>
            <p>Welcome, {user.displayName}</p>
            {user.photoURL && <img src={user.photoURL} alt="Profile" />}
            <p>Email:  {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please sign in to view this page.</p>
            <button onClick={handleRedirect}>Login</button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
