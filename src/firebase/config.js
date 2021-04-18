import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDYh1JCvk_LSg_M-PiDRCQ-7Uy4f_hb3yQ",
  authDomain: "portfolio-projects-78b86.firebaseapp.com",
  projectId: "portfolio-projects-78b86",
  storageBucket: "portfolio-projects-78b86.appspot.com",
  messagingSenderId: "366545554599",
  appId: "1:366545554599:web:8a63fd4c8c147fa43b5f82",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
