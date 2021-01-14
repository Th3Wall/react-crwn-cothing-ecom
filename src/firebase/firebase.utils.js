import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCuLTKnfwPA_F7Zy0aVfGWZAD46MpzxNvU",
    authDomain: "crwn-clothing-ecom.firebaseapp.com",
    projectId: "crwn-clothing-ecom",
    storageBucket: "crwn-clothing-ecom.appspot.com",
    messagingSenderId: "545402599401",
    appId: "1:545402599401:web:59de89e871f9ee869b3d78",
    measurementId: "G-TJDP52PWS0"
}

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;