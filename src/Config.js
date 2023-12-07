import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBep3dUdXsZ4ygQDScXXmOXrqjLliaxSxs",
    authDomain: "my-diplom-e3a8b.firebaseapp.com",
    projectId: "my-diplom-e3a8b",
    storageBucket: "my-diplom-e3a8b.appspot.com",
    messagingSenderId: "317835026300",
    appId: "1:317835026300:web:dd5fad1f24c703b1390ef9"  
}

const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)