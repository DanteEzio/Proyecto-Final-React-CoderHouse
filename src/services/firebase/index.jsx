// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //Esta funcion nos va a permitir conectar la BD

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgCxmoGUneXCowtJcNU0y5JOv6bBI9gWQ",
  authDomain: "proyectofinalreact-34750.firebaseapp.com",
  projectId: "proyectofinalreact-34750",
  storageBucket: "proyectofinalreact-34750.appspot.com",
  messagingSenderId: "842526005950",
  appId: "1:842526005950:web:74aec61b80a975c95f9cef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Generamos una referencia, es decir le damos un nombre dentro de la aplicación de React a la BD (db) y posteriormente guardamos la referencia a la BD (APP)
export const db = getFirestore(app); // La exportamos para poder utilizarla en nuestros modulos
