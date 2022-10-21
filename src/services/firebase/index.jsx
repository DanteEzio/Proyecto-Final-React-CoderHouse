// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //Esta funcion nos va a permitir conectar la BD

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Generamos una referencia, es decir le damos un nombre dentro de la aplicación de React a la BD (db) y posteriormente guardamos la referencia a la BD (APP)
export const db = getFirestore(app); // La exportamos para poder utilizarla en nuestros modulos
