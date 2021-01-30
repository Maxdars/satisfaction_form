import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "apiKey",
//     authDomain: "projectId.firebaseapp.com",
//     databaseURL: "https://databaseName.firebaseio.com",
//     storageBucket: "bucket.appspot.com",
//     projectId: "project-id",
//     messagingSenderId: "messagingSenderId",
//     appId: "appId"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCHYwlq1dsTrwY_KmJPwXjQ5QLwdXLkQnE",
  authDomain: "satisfaction-form.firebaseapp.com",
  databaseURL: "https://satisfaction-form-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "satisfaction-form",
  storageBucket: "satisfaction-form.appspot.com",
  messagingSenderId: "563264083117",
  appId: "1:563264083117:web:9c4612a17da984edbfa224"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

export { firebaseDB };