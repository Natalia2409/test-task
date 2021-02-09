import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBenAZ24i0BEMn0p9zCEI8ulxmnXVN0t4Q",
    authDomain: "test-frontend-dfc16.firebaseapp.com",
    databaseURL: "https://test-frontend-dfc16-default-rtdb.firebaseio.com",
    projectId: "test-frontend-dfc16",
    storageBucket: "test-frontend-dfc16.appspot.com",
    messagingSenderId: "806363638451",
    appId: "1:806363638451:web:528d819f36d69628d01ec6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;