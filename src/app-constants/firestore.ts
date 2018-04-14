import * as firebase from 'firebase';
require('firebase/firestore');

firebase.initializeApp({
  apiKey: process.env.FIRESTORE_API_KEY,
  authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.FIRESTORE_PROJECT_ID,
  storageBucket: process.env.FIRESTORE_STORAGE_BUCKET,
});

export const db = firebase.firestore();
export const storage = firebase.storage();
