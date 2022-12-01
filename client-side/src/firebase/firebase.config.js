// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};


// const firebaseConfig = {
//   apiKey: "AIzaSyATGCapNW1zFidswWpGuVyaMgLx6f3lauc",
//   authDomain: "phoneresale-d68dc.firebaseapp.com",
//   projectId: "phoneresale-d68dc",
//   storageBucket: "phoneresale-d68dc.appspot.com",
//   messagingSenderId: "355088733579",
//   appId: "1:355088733579:web:d1c2f31e41701e56774b8e"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app