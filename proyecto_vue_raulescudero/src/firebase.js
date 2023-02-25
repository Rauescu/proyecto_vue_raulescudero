import { getAuth } from "firebase/auth";
import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";


export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCoPqZnu451zJ_cU4f2EYLZvFnMcuZNBu0",
    authDomain: "proyectovue-90870.firebaseapp.com",
    projectId: "proyectovue-90870",
    storageBucket: "proyectovue-90870.appspot.com",
    messagingSenderId: "9930652447",
    appId: "1:9930652447:web:1f404d404399b743ff4e2a",
    measurementId: "G-LQFT8RQT7F"
});


export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
