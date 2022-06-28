import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyDx6whDttIfhA1MGsc85oOGO1SDyXiESuI",
	authDomain: "react-ecommerce-7be39.firebaseapp.com",
	projectId: "react-ecommerce-7be39",
	storageBucket: "react-ecommerce-7be39.appspot.com",
	messagingSenderId: "131153198738",
	appId: "1:131153198738:web:b97e4111b759ee9859704b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
