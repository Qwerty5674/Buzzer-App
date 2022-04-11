import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCVDm3V6X-TH_GzhGyOI_ImofCVQd2sRO4",
  authDomain: "quiz-buzzer-app-4b61a.firebaseapp.com",
  databaseURL:"https://quiz-buzzer-app-4b61a-default-rtdb.firebaseio.com/",
  projectId: "quiz-buzzer-app-4b61a",
  storageBucket: "quiz-buzzer-app-4b61a.appspot.com",
  messagingSenderId: "145843391690",
  appId: "1:145843391690:web:85f79356997d00270cf833"
};
firebase.initializeApp(firebaseConfig);
export default firebase.database()