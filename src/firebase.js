// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPSCaf1QC8CKE_VVpULbNykhpkOFmRx6I",
  authDomain: "netflix-clone-eda67.firebaseapp.com",
  projectId: "netflix-clone-eda67",
  storageBucket: "netflix-clone-eda67.appspot.com",
  messagingSenderId: "363721671638",
  appId: "1:363721671638:web:de7f157f8527fcd0d31a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);