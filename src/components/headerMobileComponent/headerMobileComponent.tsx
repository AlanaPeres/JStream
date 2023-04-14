import img from "../../assets/logo_dark.webp";
import profileicon from "../../assets/profile_icon.webp";
import IUser from "../../interface/IUsers";
import Styles from "./headerMobileComponent.module.css";
import { NavLink } from "react-router-dom";

type HeaderMobileProps = {
  user: IUser;
};

export const HeaderMobile: React.FC<HeaderMobileProps> = ({ user }) => {

  return (
    <>
      <div className={Styles.header_mobile}>
        <div className={Styles.tres_itens}>
          <img className={Styles.logotipos} src={img} alt="" />
          <h1 className={Styles.boas_vindas}>ola,{user.nome}</h1>
      <NavLink to={"/perfil"}>  <img className={Styles.user_icon} src={profileicon} alt="" /> </NavLink>   
        </div>
        <div className={Styles.show_valores}>
          <h2 className={Styles.saldos}>Saldo Disponivel</h2>
          <h2 className={Styles.valores}>R$ {user.saldoAtual}</h2>
        </div>
      </div>
    </>
  );
};
