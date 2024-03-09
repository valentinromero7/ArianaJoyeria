import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSFk4sKNIjhDXxth8nLrH-dGZjHn3IXUM",
  authDomain: "joyeria-ariana---ecommer-39b12.firebaseapp.com",
  projectId: "joyeria-ariana---ecommer-39b12",
  storageBucket: "joyeria-ariana---ecommer-39b12.appspot.com",
  messagingSenderId: "33264567148",
  appId: "1:33264567148:web:c6ea03ccc2c73a2bb22949",
  measurementId: "G-Z0HHWCLRPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
