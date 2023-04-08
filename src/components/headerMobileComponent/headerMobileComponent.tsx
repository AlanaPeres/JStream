import img from "../../assets/logo_dark.webp";
import profileicon from "../../assets/profile_icon.webp";
import Styles from "./headerMobileComponent.module.css";

type HeaderMobileProps = {
  user: string;
  currentBalance: number;
};

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  user,
  currentBalance,
}) => {
  return (
    <>
      <div className={Styles.header_mobile}>
        <div className={Styles.tres_itens}>
          <img className={Styles.logotipos} src={img} alt="" />
          <h1 className={Styles.boas_vindas}>Olá, {user}</h1>
          <img className={Styles.user_icon} src={profileicon} alt="" />
        </div>
        <div className={Styles.show_valores}>
          <h2 className={Styles.saldos}>Saldo Disponivel</h2>
          <h2 className={Styles.valores}>R$ {currentBalance}</h2>
        </div>
      </div>
    </>
  );
};
