import { initializeApp} from "firebase/app"
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyChancREA0CqXxZFA4WNobXJDlQ86NlYjc",
    authDomain: "linkedin-clone-yt-219d2.firebaseapp.com",
    projectId: "linkedin-clone-yt-219d2",
    storageBucket: "linkedin-clone-yt-219d2.appspot.com",
    messagingSenderId: "241485578838",
    appId: "1:241485578838:web:076417aad35b7aadf231f7"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   
   export { db, auth };
  