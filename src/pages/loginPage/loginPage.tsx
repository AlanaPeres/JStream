import { LoginComponent } from "../../components/loginComponent/loginComponent";
import loginImage from '../../assets/login_image.png';
import Style from './loginPage.module.css'

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
