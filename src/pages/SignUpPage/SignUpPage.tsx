import Style from './SignUpPage.module.css'
import SignUpForm from "../../components/SignUpComponent/SignUpComponent";
import registerImage from '../../assets/register_image.webp';
import './SignUpPage.module.css';

export const SignUpPage = () => {
    return (
        <div className={Style.sign_up_page}>
            <div className={Style.container} >
                <img className={Style.register_image} src={registerImage} alt="user register" />
                <SignUpForm />
            </div>
        </div>
    );
}
