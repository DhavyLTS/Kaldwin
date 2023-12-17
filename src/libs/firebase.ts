import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    projectId: "daud-d2026",
    messagingSenderId: "1022847065961",
    storageBucket: "daud-d2026.appspot.com",
    authDomain: "daud-d2026.firebaseapp.com",
    apiKey: "AIzaSyCFuFyjBunzHnf0OzFC40MtYexJjsSLKtI",
    appId: "1:1022847065961:web:14d457fd3fcf094222a7f8"
}

const fireapp = initializeApp(firebaseConfig);

export const firestore = getFirestore(fireapp);
export const fireauth = getAuth(fireapp);