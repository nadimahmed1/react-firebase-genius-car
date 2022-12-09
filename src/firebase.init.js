// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAytZ3UVDiPOGIFFWbQMfboxqypipOzzDk",
    authDomain: "react-firebase-genius-car.firebaseapp.com",
    projectId: "react-firebase-genius-car",
    storageBucket: "react-firebase-genius-car.appspot.com",
    messagingSenderId: "1015461397709",
    appId: "1:1015461397709:web:c647481732ac69f5055584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth