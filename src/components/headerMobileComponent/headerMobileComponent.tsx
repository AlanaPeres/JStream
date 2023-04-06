import img from "../../assets/logo dark.png";
import profileicon from "../../assets/profile icon.png";
import Styles from "./headerMobileComponent.module.css";

type HeaderMobileProps = {
  user: string;
  saldoAtual: number;
};

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  user,
  saldoAtual,
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
          <h2 className={Styles.valores}>R$ {saldoAtual}</h2>
        </div>
      </div>
    </>
  );
};
