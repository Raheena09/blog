import firebase from 'firebase/compat/app'
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAMmClic90jmkOhlojRj31a5Cp5r9yaVQc",
    authDomain: "ekbanatask.firebaseapp.com",
    projectId: "ekbanatask",
    storageBucket: "ekbanatask.appspot.com",
    messagingSenderId: "755775809349",
    appId: "1:755775809349:web:e55c9f2a55df53af44002c"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;