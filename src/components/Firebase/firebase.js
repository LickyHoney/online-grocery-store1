import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



const config = {
  apiKey: "AIzaSyC3T2JIjG8SB8UQMXfCizdRKePRTBaXqlY",
    authDomain: "onlineshop-6c3b3.firebaseapp.com",
    databaseURL: "https://onlineshop-6c3b3.firebaseio.com",
    projectId: "onlineshop-6c3b3",
    storageBucket: "onlineshop-6c3b3.appspot.com",
    messagingSenderId: "48560561585"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    
    this.auth = app.auth();
    this.db = app.database();
  }
  
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;