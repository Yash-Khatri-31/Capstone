import SignUp from "../../components/sign-up/sign-up.component";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <SignUp />
        </>
    )
}

export default SignIn;