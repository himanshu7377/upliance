import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Counter from './Counter/Counter'
import Background from './Background/Background'
import UserForm from './UserForm/UserForm';
import TextEditor from './TextEditor/TextEditor';
import GenerateUserID from './GenerateId/GenerateId';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, Setcount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount) : 0;
  });
  
  const [userList,setUserList] = useState([]);
  const [currentUser,setCurrentUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem('userList',JSON.stringify(userList));
  }, [userList]);

  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <Counter count={count} change={Setcount} />
        <TextEditor curruser={currentUser} />
        <GenerateUserID/>
        <UserForm users={userList} saveuser={setUserList} curruser={setCurrentUser}/>
      </div>
      <Background level={count} />
    </>
  )
}

export default App
