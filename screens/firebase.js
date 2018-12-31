import firebase from 'firebase';

export const firebaseConfig = { 
  apiKey: "AIzaSyCKIe2wGxZseEtahTadyfiEtiHAsn1UG04",
  authDomain: "kictschedulemakerdb.firebaseapp.com",
  databaseURL: "https://kictschedulemakerdb.firebaseio.com",
  projectId: "kictschedulemakerdb",
  storageBucket: "kictschedulemakerdb.appspot.com",
  messagingSenderId: "17998664586"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
