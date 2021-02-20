import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD_rM95H5zAgrlCGojBEaukgb2crujRLIg",
	authDomain: "drive-ba0ad.firebaseapp.com",
	projectId: "drive-ba0ad",
	storageBucket: "drive-ba0ad.appspot.com",
	messagingSenderId: "651956140332",
	appId: "1:651956140332:web:2c87816310b81145d41489",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
