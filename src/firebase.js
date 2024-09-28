// firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';  // If you're using storage

const firebaseConfig = {
    apiKey: "AIzaSyDo-9M8xjWaRoE4L5NJWULzMoQ9pbYBeFE",
    authDomain: "diamondselfie-3ca05.firebaseapp.com",
    projectId: "diamondselfie-3ca05",
    storageBucket: "diamondselfie-3ca05.appspot.com",
    messagingSenderId: "941211346260",
    appId: "1:941211346260:web:8510f8415b95be39c2d4c1",
    measurementId: "G-GGFZ0927KJ"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);  // If you're using Firebase Storage

export {  storage };
