import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuCQh4u0eRCMKAGDETYOhksaafr_3SvgE",
    authDomain: "laaps-carwash.firebaseapp.com",
    databaseURL: "https://laaps-carwash.firebaseio.com",
    projectId: "laaps-carwash",
    storageBucket: "laaps-carwash.appspot.com",
    messagingSenderId: "574297497011",
    appId: "1:574297497011:web:ce704ef34eca47b824ffc6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };