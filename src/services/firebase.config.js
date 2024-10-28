import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


var const firebaseConfig = {
    apiKey: "AIzaSyBTay48aZ4v8v3zzHO8hn6rmVSeWcpWoAA",
    authDomain: "tasker-af052.firebaseapp.com",
    projectId: "tasker-af052",
    storageBucket: "tasker-af052.appspot.com",
    messagingSenderId: "602374855812",
    appId: "1:602374855812:web:2941d6f18279529716b6d1"
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
