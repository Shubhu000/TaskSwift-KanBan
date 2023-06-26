// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAqMdRcAuCmJ9K3sVlSqmD49XHQz_5SD-o",
//   authDomain: "taskswift-53edc.firebaseapp.com",
//   projectId: "taskswift-53edc",
//   storageBucket: "taskswift-53edc.appspot.com",
//   messagingSenderId: "223254106587",
//   appId: "1:223254106587:web:6b19aba45a932cd1bed7fe",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const ENV = import.meta.env;
const firebaseConfig = {
  apiKey: ENV.VITE_API_KEY,
  authDomain: ENV.VITE_AUTH_DOMAIN,
  projectId: ENV.VITE_PROJECT_ID,
  storageBucket: ENV.VITE_STORAGE_BUCKET,
  messagingSenderId: ENV.VITE_MESSAGING_SENDER_ID,
  appId: ENV.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
export const storage = getStorage(app);

export default app;
