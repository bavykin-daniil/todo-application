import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsZrPcXupdeR9XaPRa8G9wcCwZuYmNbLQ",
  authDomain: "todo-application-ae8f1.firebaseapp.com",
  projectId: "todo-application-ae8f1",
  storageBucket: "todo-application-ae8f1.appspot.com",
  messagingSenderId: "119326985742",
  appId: "1:119326985742:web:53a51e7a4764122d89b65f",
  measurementId: "G-HM5L3KN3LT",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
