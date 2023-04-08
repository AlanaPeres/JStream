import loginImage from '../../assets/login_image.webp';
import { LoginComponent } from '../../components/loginComponent/LoginComponent';
import Style from './LoginPage.module.css'

export const LoginPage = () => {
  return (
    <div className={Style.sign_up_page}>
      <div className={Style.container} >
        <img className={Style.register_image} src={loginImage} alt="user register" />
        <LoginComponent />
      </div>
    </div>
  );
};