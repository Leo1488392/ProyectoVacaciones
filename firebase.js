// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics"; // Si necesitas Analytics, de lo contrario puedes omitir esta línea
import { getAuth } from 'firebase/auth'; // Importa el módulo de autenticación si lo necesitas

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6aBiMfkyEMpdG2W_n7dhiIHDLBNcn7oM",
  authDomain: "proyecto-vacaciones-d04fb.firebaseapp.com",
  projectId: "proyecto-vacaciones-d04fb",
  storageBucket: "proyecto-vacaciones-d04fb.appspot.com",
  messagingSenderId: "318002782774",
  appId: "1:318002782774:web:1683e923241dd2b211ee97",
  measurementId: "G-9QW7HRWK32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); // Si no necesitas Analytics, puedes omitir esta línea
const auth = getAuth(app); // Inicializa la autenticación

export { app, auth }; // Exporta app y auth para usarlos en otros componentes