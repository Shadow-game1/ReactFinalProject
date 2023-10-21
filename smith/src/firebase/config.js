// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCex-iTW7TJut4imqRy54CTEjsA_Xuvi04",
    authDomain: "morioh-manga.firebaseapp.com",
    projectId: "morioh-manga",
    storageBucket: "morioh-manga.appspot.com",
    messagingSenderId: "670805044662",
    appId: "1:670805044662:web:b1c5bf987b40c8b9f76517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)