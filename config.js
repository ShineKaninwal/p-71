import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 // Import the functions you need from the SDKs you need

  apiKey: "AIzaSyD4IMio_qdZR8uHE6z2lWhor9iiu7B3mU4",
  authDomain: "complain-forum-d74d9.firebaseapp.com",
  databaseURL: "https://complain-forum-d74d9-default-rtdb.firebaseio.com",
  projectId: "complain-forum-d74d9",
  storageBucket: "complain-forum-d74d9.appspot.com",
  messagingSenderId: "459735379871",
  appId: "1:459735379871:web:5ce714b263d0b901ac17aa"
};

// Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

