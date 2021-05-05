import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB8URszhQk1d2B4mjuWAr7226fP114sPAU",
    authDomain: "chill-zone-d6769.firebaseapp.com",
    projectId: "chill-zone-d6769",
    storageBucket: "chill-zone-d6769.appspot.com",
    messagingSenderId: "285242599053",
    appId: "1:285242599053:web:e7ff91181d012e849ee4c4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db };  