import firebase from 'firebase/app'; // .../app is used so we don't have the whole library
import 'firebase/firestore'; // for storage
import 'firebase/auth';     // for authentication

// From firebase web...
// this is for google authentication
const config = {
    apiKey: "AIzaSyDxVOHTvvMfD4W0at9mlNwbnW4S56fzSIk",
    authDomain: "crown-db-2612f.firebaseapp.com",
    projectId: "crown-db-2612f",
    storageBucket: "crown-db-2612f.appspot.com",
    messagingSenderId: "218591461225",
    appId: "1:218591461225:web:f96324eb1d8f7354c7c7f8",
    measurementId: "G-0C8VMYZBN7"
};

// Creating userProfile at firebase if it doesn't already exist
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`); // getting the userRef from firebase

    const snapShot = await userRef.get();
    // To register user if it does not exist in the database
    if(!snapShot.exists) {
         const { displayName, email} = userAuth;
         const createdAt = new Date();

         try {
             await userRef.set({
                //  What we want ot add to the database
                 displayName,
                 email,
                 createdAt,
                 ...additionalData
             })
         } catch (error) {
             console.log('error creating user', error.message);
         } // end of try/catch

    } // end of if(!snapShot)
    
    return userRef; // We might want to use the userRef object
} // end of export const CreateUserProfileDocument

firebase.initializeApp(config); // connection with firebase

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // Google Auth
provider.setCustomParameters({ prompt: 'select_account'}); // always pop ups when using google auth..

// SignInWithPopup can be used with multiple popups, we give it provider => GOOGLE AUTH
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; // if we want the whole library