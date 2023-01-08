import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'; //getDoc is getdoc data, to get doc we use just doc instance


const firebaseConfig = {
    apiKey: "AIzaSyALMzIa5WJr-2UeF1wH7m4D4FvIjtF_ZsY",
    authDomain: "crown-clothing-4237b.firebaseapp.com",
    projectId: "crown-clothing-4237b",
    storageBucket: "crown-clothing-4237b.appspot.com",
    messagingSenderId: "147397770197",
    appId: "1:147397770197:web:986fb023ba72e7f3715b5c",
    measurementId: "G-GQVSG94PR0"
};

export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// important function
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const docRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(docRef);

    if (!userSnapshot.exists()) { // my bad I thought yashr existed but just the docRef exists, not the snapshot in the db
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await setDoc(docRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
            return docRef;

        } catch (error) {
            console.log({ message: error.message })
        }
    }

    return docRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}