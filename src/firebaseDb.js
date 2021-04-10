import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwGXows76M9_abbmiZl_xwI6CZ0_xaWbc",
    authDomain: "vue-firebase-crud-app-46b68.firebaseapp.com",
    projectId: "vue-firebase-crud-app-46b68",
    storageBucket: "vue-firebase-crud-app-46b68.appspot.com",
    messagingSenderId: "680946895444",
    appId: "1:680946895444:web:7c546c8bbf113ab5343bc1",
    measurementId: "G-3XV0RP30TJ"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();