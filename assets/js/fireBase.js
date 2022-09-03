// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG-5bMEwktWoMCfJlAAmBFz-2t6DFeb-4",
    authDomain: "vertical-setup-358714.firebaseapp.com",
    projectId: "vertical-setup-358714",
    storageBucket: "vertical-setup-358714.appspot.com",
    messagingSenderId: "987808496131",
    appId: "1:987808496131:web:656e149a2186fd831f2c36",
    measurementId: "G-XNBZXWBVYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);