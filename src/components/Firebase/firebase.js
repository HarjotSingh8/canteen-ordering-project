import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBWkcnuIWQfwWKF9iHzbDyopT6fdqi02X8",
  authDomain: "canteen-ordering-3d30c.firebaseapp.com",
  databaseURL: "https://canteen-ordering-3d30c.firebaseio.com",
  projectId: "canteen-ordering-3d30c",
  storageBucket: "canteen-ordering-3d30c.appspot.com",
  messagingSenderId: "155341264665",
  appId: "1:155341264665:web:6e6c97d269ce56ead59788",
  measurementId: "G-C199BELLX4"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  doSignOut = () => this.auth.signOut();
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");
}

export default Firebase;
