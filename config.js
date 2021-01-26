import { firebase } from '@firebase/app';


 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAfVY-gQwtLVJipA27IArp69dnaPxSHwA8",
    authDomain: "willy-app-c9bcb.firebaseapp.com",
    projectId: "willy-app-c9bcb",
    databaseURL: "https://willy-app-c9bcb.firebaseio.com",
    storageBucket: "willy-app-c9bcb.appspot.com",
    messagingSenderId: "384342909784",
    appId: "1:384342909784:web:c750f5a34ef0473c613b2d"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();

  const db = firebase.firestore();

  export default db;
