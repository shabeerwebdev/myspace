// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNXD8Tjg2ZGk4PlaIXAY3FELIsdLNaozE",
  authDomain: "myspace-33115.firebaseapp.com",
  projectId: "myspace-33115",
  storageBucket: "myspace-33115.appspot.com",
  messagingSenderId: "453788618176",
  appId: "1:453788618176:web:f2dcddeaced4e2b8e94c25",
  measurementId: "G-3Y1E1Y55X7",
  databaseURL:
    "https://myspace-33115-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export default database;