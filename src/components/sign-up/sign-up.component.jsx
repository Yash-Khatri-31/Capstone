import './sign-up.styles.scss';
import { useState } from "react";
import { useContext } from 'react';
import Button from '../button/button.component';
import { UserContext } from '../../contexts/user.context';
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {

        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password is not same");
            return;
        }

        try {

            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setCurrentUser(user);
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') alert('Email ID is already registered')
            else console.log({ message: error.message })
        }
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleEvent = (event) => {

        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign Up with Email and Password</span>
            <form onSubmit={handleSubmit} >

                <FormInput label="Display Name" required type="text" onChange={handleEvent} name="displayName" value={displayName} />
                <FormInput label="Email" required type="email" onChange={handleEvent} name="email" value={email} />
                <FormInput label="Password" required type="password" onChange={handleEvent} name="password" value={password} />
                <FormInput label="Confirm Password" required type="password" onChange={handleEvent} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign</Button>
            </form>
        </div>
    )
}

export default SignUp;