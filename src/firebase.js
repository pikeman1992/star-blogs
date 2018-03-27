import {initializeApp} from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyBz0rLnTGy6kkLKs9MSRHgZFPmv-yyIN6M",
  authDomain: "personal-d3408.firebaseapp.com",
  databaseURL: "https://personal-d3408.firebaseio.com",
  projectId: "personal-d3408",
  storageBucket: "personal-d3408.appspot.com",
  messagingSenderId: "24080827710"
});

export const db = app.database();
export const storage = app.storage();

export const postsRef = db.ref('posts');