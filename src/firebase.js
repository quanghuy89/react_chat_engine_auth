import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCco8r9A04LOmVPD8AANt2hB4ArTn7QLWk",
    authDomain: "chatbox-8c75f.firebaseapp.com",
    projectId: "chatbox-8c75f",
    storageBucket: "chatbox-8c75f.appspot.com",
    messagingSenderId: "920173781790",
    appId: "1:920173781790:web:b6f95206350f5d74601f0f"
  }).auth();