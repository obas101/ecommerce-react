import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDx6whDttIfhA1MGsc85oOGO1SDyXiESuI",
	authDomain: "react-ecommerce-7be39.firebaseapp.com",
	projectId: "react-ecommerce-7be39",
	storageBucket: "react-ecommerce-7be39.appspot.com",
	messagingSenderId: "131153198738",
	appId: "1:131153198738:web:b97e4111b759ee9859704b",
};

firebase.initializeApp(config);
