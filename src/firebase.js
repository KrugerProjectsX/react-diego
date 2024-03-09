// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEdmMlnjIH729pFPum_xeVJWg0ye6sb54",
    authDomain: "flat-project-bb82d.firebaseapp.com",
    projectId: "flat-project-bb82d",
    storageBucket: "flat-project-bb82d.appspot.com",
    messagingSenderId: "570205310365",
    appId: "1:570205310365:web:11c165b22bc5ee59d5b374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


