// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'upliance-421414.firebaseapp.com',
  projectId: 'upliance-421414',
  storageBucket: 'upliance-421414.appspot.com',
  messagingSenderId: '112120118780',
  appId:'1:112120118780:web:53b45e816825176ce44679' ,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };