import * as firebase from 'firebase';
require('firebase/firestore');
const config = require('clientconfig');

firebase.initializeApp({
  apiKey: config.FIRESTORE_API_KEY,
  authDomain: config.FIRESTORE_AUTH_DOMAIN,
  projectId: config.FIRESTORE_PROJECT_ID,
  storageBucket: config.FIRESTORE_STORAGE_BUCKET,
});

export const db = firebase.firestore();
export const storageRef = firebase.storage().ref();
