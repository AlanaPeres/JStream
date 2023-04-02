import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import registerImage from '../../assets/register_image.png';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="sign-up-page">
            <div className="sign-up-page_container">
                <img className="register-image" src={registerImage} alt="user register" />
                <SignUpForm />
            </div>
            
        </div>
    );
}

export default SignUp;