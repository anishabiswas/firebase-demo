import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDSxvg97yIqdj-dVKq1wvQ2lH2Q4GvW00M",
  authDomain: "clone-bc2d8.firebaseapp.com",
  projectId: "clone-bc2d8",
  storageBucket: "clone-bc2d8.firebasestorage.app",
  messagingSenderId: "695847866074",
  appId: "1:695847866074:web:7fc098559a06be5e125fe3",
  databaseURL: "https://clone-bc2d8-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
