import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDJ1GmtIfb8MeId15e7RYyK2KNVh9dYG-8",
    authDomain: "todoapp-56c16.firebaseapp.com",
    databaseURL: "https://todoapp-56c16.firebaseio.com",
    projectId: "todoapp-56c16",
    storageBucket: "todoapp-56c16.appspot.com",
    messagingSenderId: "856215311931",
    appId: "1:856215311931:web:9ef5b7b87ba3059ba66e1e",
    measurementId: "G-FYF01N4R29"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


export const getTasks = async (lang = 'en') => {
    const snapshots = await firestore.collection(`tasks`).get();
    const posts = snapshots.docs.map((doc) => {

        const data = doc.data();

        return data;
    });
    console.log(posts)
    return posts

}

export const firestore = firebase.firestore();

export default firebase;