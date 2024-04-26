import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './Counter/Counter';
import Background from './Background/Background';
import UserForm from './UserForm/UserForm';
import TextEditor from './TextEditor/TextEditor';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
// import LoginPage from './LoginPage';
import Dashboard from './Dashboard/Dashboard.jsx';
// import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component
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

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(userList));
  }, [userList]);

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
              // <RequireAuth>
                <Dashboard />
              // </RequireAuth>
            }
          />
          <Route path="/" element={
            <>
              <Counter count={count} change={setCount} />
              <TextEditor />
              <UserForm users={userList} saveUser={setUserList} />
              <Background level={count} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
