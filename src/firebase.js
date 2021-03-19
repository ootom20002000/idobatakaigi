import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDao-9tpZTdPUipfnV7xaXfbOuBilOlPmw",
    authDomain: "idobatakaigi-with-ham-11345.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-11345",
    storageBucket: "idobatakaigi-with-ham-11345.appspot.com",
    messagingSenderId: "529621388804",
    appId: "1:529621388804:web:b91dbe59e5455fbde06f51"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages');

  export const pushMessage = ({ name, text }) => {
      messageRef.push({ name, text});
  };