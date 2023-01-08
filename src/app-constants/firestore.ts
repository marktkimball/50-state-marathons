import * as firebase from 'firebase';

require('firebase/firestore');

const getCookieValue = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    // @ts-ignore next-line
    return parts.pop().split(';').shift();
  }

  return '';
};


firebase.initializeApp({
  apiKey: getCookieValue('FIRESTORE_API_KEY'),
  appId: getCookieValue('APP_ID'),
  authDomain: 'marathon-50-states.firebaseapp.com',
  databaseURL: 'https://marathon-50-states.firebaseio.com',
  messagingSenderId: getCookieValue('MESSAGING_SENDER_ID'),
  projectId: 'marathon-50-states',
  storageBucket: 'marathon-50-states.appspot.com',
});

export const db = firebase.firestore();
export const storageRef = firebase.storage().ref();
