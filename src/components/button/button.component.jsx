import { BaseButton, GoogleSignInButton, InvertedSignInButton } from "./button.styles";

const BUTTON_TYPE = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE.base) => (
    {
        [BUTTON_TYPE.base]: BaseButton,
        [BUTTON_TYPE.google]: GoogleSignInButton,
        [BUTTON_TYPE.inverted]: InvertedSignInButton
    }
)

const Button = ({ children, buttonType, ...otherProps }) => {

    const CustomButton = getButton(buttonType);

    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}

export default Button;