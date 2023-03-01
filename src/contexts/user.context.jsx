import { createAction } from "../reducer.utils";
import { USER_ACTION_TYPES } from "../store/user/user.types";
import { createContext, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: return { ...state, currentUser: payload };
        default: throw new Error(`Unhandled type ${type}`);
    }
}

const INITAL_STATE = {
    currentUser: null
}


export const UserProvider = ({ children }) => {

    const [{ currentUser }, dispatch] = useReducer(userReducer, INITAL_STATE);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

// when we click signout, auth listens to it, and then it sets current user to null, and that value is used in nav.
// we do not have to set current user from sign out and sign in because we are setting the user through the auth listener.

// we are also shifting the createUserDoc from the googlePopup to here cause that can also be done once a auth change is there
// 