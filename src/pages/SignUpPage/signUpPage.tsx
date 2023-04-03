import React from "react";
import Style from './SignUpPage.module.css'
import SignUpForm from "../../components/SignUpComponent/SignUpComponent";
import registerImage from '../../assets/register_image.png';
import './SignUpPage.module.css';

const SignUp = () => {
    return (
        <div className={Style.sign_up_page}>
            <div className={Style.container} >
                <img className={Style.register_image} src={registerImage} alt="user register" />
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUp;