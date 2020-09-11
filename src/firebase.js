import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDHHpDHP3oc_d-BYQ0R98AH_u8bvwdTdlA",
    authDomain: "e-clone-8a2e2.firebaseapp.com",
    databaseURL: "https://e-clone-8a2e2.firebaseio.com",
    projectId: "e-clone-8a2e2",
    storageBucket: "e-clone-8a2e2.appspot.com",
    messagingSenderId: "717009953720",
    appId: "1:717009953720:web:262e78ac57921e9fe6a54d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};