import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'; //getDoc is getdoc data, to get doc we use just doc instance
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';


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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.map((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
        return docRef;
    })

    await batch.commit();

};

export const getCategoriesAndDocuments = async () => {

    const collectionRef = collection(db, 'categories');

    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;


};

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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email && !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
    return await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
}