import firebase from "firebase"


const firebaseConfig = {
        apiKey: "AIzaSyA63JQ82Z7i7VtrRMqPBEh75jcW7ZOKVK4",
        authDomain: "instaclone-a5ac1.firebaseapp.com",
        projectId: "instaclone-a5ac1",
        storageBucket: "instaclone-a5ac1.appspot.com",
        messagingSenderId: "287919502717",
        appId: "1:287919502717:web:6f6333e7a488480adfc814"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()


export  { firebase, db } 