import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './Counter/Counter';
import Background from './Background/Background';
import UserForm from './UserForm/UserForm';
import TextEditor from './TextEditor/TextEditor';
import SignInPage from './Signin/SignInPage.jsx'
import SignUpPage from './SignUpPage';
import Navbar from './Navbar/Navbar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './RequireAuth.jsx';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount) : 0;
  });

  const [userList, setUserList] = useState([]);
  const [savedUser, setSavedUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(userList));
  }, [userList]);

    // Define saveUser function
    const saveuser = (userData) => {
      setUserList(userData);
      setSavedUser(userData[userData.length - 1]); // Save the last user in the list
  };

     // Define curruser function
  const curruser = (user) => {
    console.log('Current user:', user);
    setSavedUser(user);
   
    // Implement any logic you need with the current user
  };

  return (
    <Router>
      <div className={styles.container}>
        <ToastContainer />
        <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
            path="/dashboard"
            element={
              <RequireAuth>
             
                <Dashboard />
              
              // </RequireAuth>
            }
          />
          <Route path="/" element={
            <>
              <Counter count={count} change={setCount} />
              <TextEditor curruser={savedUser} />
            <Navbar/>
              <UserForm users={userList} saveuser={saveuser} curruser={curruser} />
              <Background level={count} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
