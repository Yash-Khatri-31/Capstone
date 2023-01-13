import './sign-in.styles.scss';
import { useState } from "react";
import Button, { BUTTON_TYPE } from '../button/button.component';
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {

        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch (error) {
            switch (error) {
                case 'auth/wrong-password': alert('Wrong Password or Email'); break;
                case 'auth/user-not-found': alert('Wrong Password or Email'); break;
                default: console.log({ message: error.message })
            }
        }

    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleEvent = (event) => {

        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In</span>
            <form onSubmit={handleSubmit} >

                <FormInput label="Email" required type="email" onChange={handleEvent} name="email" value={email} />
                <FormInput label="Password" required type="password" onChange={handleEvent} name="password" value={password} />

                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE.google}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;

//even the normal button is triggered when google button is clicked because they are of type submit. therefore we change it to type buton.