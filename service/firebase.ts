// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_9ef8T6UejZlrVlMjvFWv4RTest0AFLw",
  authDomain: "guchirou-6a558.firebaseapp.com",
  databaseURL:
    "https://guchirou-6a558-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "guchirou-6a558",
  storageBucket: "guchirou-6a558.appspot.com",
  messagingSenderId: "802212755648",
  appId: "1:802212755648:web:196f06e407fdb6b9879525",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export default firebaseConfig;
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
