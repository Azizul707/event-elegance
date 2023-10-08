// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDXQQbh4Z81D0Tb-E-gQh8Wa2YLi9LbAlU",
  authDomain: "event-elegance-8db17.firebaseapp.com",
  projectId: "event-elegance-8db17",
  storageBucket: "event-elegance-8db17.appspot.com",
  messagingSenderId: "864127174733",
  appId: "1:864127174733:web:65de4b86e38faebfcb3404"
};


const app = initializeApp( firebaseConfig );

export const auth = getAuth(app);

export default app;