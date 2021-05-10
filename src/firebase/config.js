import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3thFK22xhxTvmUKadgshbjFVX9kHCUcI",
    authDomain: "whatsfordinner-65ea8.firebaseapp.com",
    projectId: "whatsfordinner-65ea8",
    storageBucket: "whatsfordinner-65ea8.appspot.com",
    messagingSenderId: "397037115661",
    appId: "1:397037115661:web:717696ec73288ac211f844"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };