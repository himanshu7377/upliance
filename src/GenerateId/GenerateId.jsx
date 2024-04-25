import React, { useState, useEffect } from "react";
import styles from './GenerateId.module.css';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

export default function GenerateUserID({ users, saveuser, curruser }) {
    const [user, setUser] = useState({
        name: '',
        Address: '',
        email: '',
        phone: '',
        id: ''
    });

    const [unsavedChanges, setUnsavedChanges] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (unsavedChanges) {
               
                event.preventDefault();
                
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [unsavedChanges]);

    function handleInputChange(field, value) {
        setUser(prev => ({ ...prev, [field]: value }));
        setUnsavedChanges(true);
    }

    function genrateId() {
        if (validate()) {
            if (!userAlreadyExists()) {
                const tempID = uuidv4();
                setUser(prev => ({ ...prev, id: tempID.toUpperCase() }));
                setUnsavedChanges(false);
                toast.success('Id Generated Successfully', {
                    // Toast configuration
                });
            } else {
                toast.warn('User Already Exists', {
                    // Toast configuration
                });
            }
        } else {
            toast.error('Please Fill All Data', {
                // Toast configuration
            });
        }
    }

    function userAlreadyExists() {
        for (const ele of users) {
            if (ele.email === user.email) {
                return true;
            }
        }
        return false;
    }

    function saveUser() {
        if (validate() && user.id) {
            const tempuserlist = [...users];
            tempuserlist.push(user);
            saveuser(tempuserlist);
            curruser(user);
            setUnsavedChanges(false);
            toast.success('User Saved Successfully', {
                // Toast configuration
            });
            clear();
        } else {
            toast.error('Please Generate Id', {
                // Toast configuration
            });
        }
    }

    function clear() {
        setUser({
            name: '',
            Address: '',
            email: '',
            phone: '',
            id: ''
        });
        setUnsavedChanges(false);
    }

    function validate() {
        return user.name && user.Address && user.email && user.phone;
    }

    return (
        <div className={styles.userfrom}>
            <h1>User Form</h1>
            <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <p className={styles.user_id}>User Id : {user.id ? user.id : 'XXXX-XXXX-XXXX'}</p>
            <input
                type="text"
                placeholder="Address"
                value={user.Address}
                onChange={(e) => handleInputChange('Address', e.target.value)}
            />
            <br />
            <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <br />
            <input
                type="tel"
                placeholder="Phone"
                value={user.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
            />
            <br />
            <button className={styles.save_btn} onClick={genrateId}>Generate ID</button>
            <br />
            <button className={styles.save_btn} onClick={saveUser}>Save</button>
            <br />
            <button className={styles.save_btn} onClick={clear}>Clear</button>
        </div>
    );
}
