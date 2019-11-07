import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAvjqL8FR9n8gVhFxzSkQeGr-Nv1glrGLY",
  authDomain: "photowall-c4aa0.firebaseapp.com",
  databaseURL: "https://photowall-c4aa0.firebaseio.com",
  projectId: "photowall-c4aa0",
  storageBucket: "photowall-c4aa0.appspot.com",
  messagingSenderId: "805274067733",
  appId: "1:805274067733:web:d078efa71c01263416bf1c",
  measurementId: "G-1ZLHY1NSHB"
}

firebase.initializeApp(config)


const database = firebase.database()

export {database}
