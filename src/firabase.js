import firebase from "firebase";


// For Firebase JS SDK v7.20.0 a nd later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA50fa_XqoemeuCVPyq62ij86fsM7vnTcA",
    authDomain: "facebook-clone-ecda8.firebaseapp.com",
    projectId: "facebook-clone-ecda8",
    storageBucket: "facebook-clone-ecda8.appspot.com",
    messagingSenderId: "191141471484",
    appId: "1:191141471484:web:12dbb27488642745676379",
    measurementId: "G-6X736SJ792"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 