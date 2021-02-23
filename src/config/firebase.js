import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com",
    projectId: "project-id",
    messagingSenderId: "messagingSenderId",
    appId: "appId"
  };

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

export { firebaseDB };