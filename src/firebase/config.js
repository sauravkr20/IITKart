import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDGAE0H7YCsfszicSDanWWUtdDqwn3Wit8",
  authDomain: "iitkart.firebaseapp.com",
  projectId: "iitkart",
  storageBucket: "iitkart.appspot.com",
  messagingSenderId: "513864483293",
  appId: "1:513864483293:web:50e1210cdf07455831f634",
  measurementId: "G-KT5V67C25F"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export