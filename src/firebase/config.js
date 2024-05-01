// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCsNmnn33u6pCNBj8VkGH-Ul74_j1PFYc",
  authDomain: "soy-mimi.firebaseapp.com",
  projectId: "soy-mimi",
  storageBucket: "soy-mimi.appspot.com",
  messagingSenderId: "239508614169",
  appId: "1:239508614169:web:aa6d65f3c4ee6ef5f00e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { firebaseConfig, db, auth };