import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7bITMqGucFhoDOfAbtWa2d5Ab-P_CpjI",
  authDomain: "fintrack-bd99b.firebaseapp.com",
  projectId: "fintrack-bd99b",
  storageBucket: "fintrack-bd99b.firebasestorage.app",
  messagingSenderId: "567312084062",
  appId: "1:567312084062:web:7e62493a890cdc5edd18cf"
};

const app = initializeApp(firebaseConfig);
export default app;