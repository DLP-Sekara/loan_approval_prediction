// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDP7UUEygcTEKEeAkwERq9OGmPZRdDSWmo',
  authDomain: 'authone-210fb.firebaseapp.com',
  projectId: 'authone-210fb',
  storageBucket: 'authone-210fb.appspot.com',
  messagingSenderId: '566465507595',
  appId: '1:566465507595:web:1416d7356c8da08ceb320e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(app);
export const firestore_db = getFirestore(app);
