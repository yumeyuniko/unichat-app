import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyClcqb2hD1TSCeI0XGQot6od3fE86ouZnc',
    authDomain: 'unichat-c3fe0.firebaseapp.com',
    projectId: 'unichat-c3fe0',
    storageBucket: 'unichat-c3fe0.appspot.com',
    messagingSenderId: '675343096768',
    appId: '1:675343096768:web:7fd835ac5c4c42054bc625',
  })
  .auth();
