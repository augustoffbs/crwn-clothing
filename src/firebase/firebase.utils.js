import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANdpL-CQ7i5dw_CzRKU994RwAU7X7PFCg",
    authDomain: "crwn-db-301f0.firebaseapp.com",
    databaseURL: "https://crwn-db-301f0.firebaseio.com",
    projectId: "crwn-db-301f0",
    storageBucket: "crwn-db-301f0.appspot.com",
    messagingSenderId: "1085600514377",
    appId: "1:1085600514377:web:ec0b521dd9fabf0573da98"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;