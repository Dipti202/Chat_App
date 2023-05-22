
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: "AIzaSyCwU4954ZzMQSRcqqycO-ST82Se_RraZJA",
  authDomain: "chat-1406d.firebaseapp.com",
  projectId: "chat-1406d",
  storageBucket: "chat-1406d.appspot.com",
  messagingSenderId: "195288185150",
  appId: "1:195288185150:web:4e9e4c910c7a7e2f7fd46f"
};

// Initialize Firebase
const app = firebase.initializeApp(config);
export const auth=app.auth()// import auth libaray from firebase.get auth object to interact with firebase. 
//with help of this object will manage facebook and google sign in
export const database=app.database()//import db to store new user signed data
