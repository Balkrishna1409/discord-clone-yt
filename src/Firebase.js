import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCP6UIUvdleMc1_SsT26IWWlaAqCIggKIc",
    authDomain: "discord-clone-yt-115af.firebaseapp.com",
    projectId: "discord-clone-yt-115af",
    storageBucket: "discord-clone-yt-115af.appspot.com",
    messagingSenderId: "588190096921",
    appId: "1:588190096921:web:a4ca0af8a5ecabed865488",
    measurementId: "G-5RGV9EHSLL"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db= firebaseapp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;