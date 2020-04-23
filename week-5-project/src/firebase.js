import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAjD0LleQx_Q0t7byW06EEwTuvwe_pUvUc",
  authDomain: "react-practice-project-c6e0b.firebaseapp.com",
  databaseURL: "https://react-practice-project-c6e0b.firebaseio.com",
  projectId: "react-practice-project-c6e0b",
  storageBucket: "react-practice-project-c6e0b.appspot.com",
  messagingSenderId: "123936789112",
  appId: "1:123936789112:web:4d572f0d99f7f5962f538d",
};
firebase.initializeApp(config);
export default firebase;
