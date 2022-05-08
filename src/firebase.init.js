// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3U2ctIPjCewVI_cvGm_KO4JQZ-xsckN8",
  authDomain: "warehouse-management-web-a8f05.firebaseapp.com",
  projectId: "warehouse-management-web-a8f05",
  storageBucket: "warehouse-management-web-a8f05.appspot.com",
  messagingSenderId: "254212864966",
  appId: "1:254212864966:web:c39f86f9fd6cad77c290c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;