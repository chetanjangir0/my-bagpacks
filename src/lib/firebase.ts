import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDBZbsGUe7d_LHn4EEeagR8qNm6alQioXY",
    authDomain: "bagpacks.firebaseapp.com",
    projectId: "bagpacks",
    storageBucket: "bagpacks.appspot.com",
    messagingSenderId: "194057227485",
    appId: "1:194057227485:web:5796e12fa1a4eb38ed9f34",
    measurementId: "G-G3BBLX0ZZT"
};

export const app=initializeApp(firebaseConfig);
export const db=getFirestore();
export const auth=getAuth();
