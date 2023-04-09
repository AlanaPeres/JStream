import { useState, useEffect } from "react";
import img from "../../assets/logo_dark.webp";
import profileicon from "../../assets/profile_icon.webp";
import IUser from "../../interface/IUsers";
import Styles from "./headerMobileComponent.module.css";
import { contaService } from "../../service/contaService";


type HeaderMobileProps = {
  user: IUser;  
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({user})=>{
  const [loginData, setLoginData] = useState<IUser | null>(null);

  useEffect(() => {
    const storedData = contaService.getUserLogged('loginData');
    if (storedData) {
      setLoginData(storedData);
    }
  }, []);

  return(
    <>
      <div className={Styles.header_mobile}>
        <div className={Styles.tres_itens}>
          <img className={Styles.logotipos} src={img} alt="" />
          <h1 className={Styles.boas_vindas}>ola,{loginData?.nome}</h1>
          <img className={Styles.user_icon} src={profileicon} alt="" />
        </div>
        <div className={Styles.show_valores}>
          <h2 className={Styles.saldos}>
            Saldo Disponivel 
          </h2>
          <h2 className={Styles.valores}>R$ {}</h2>
        </div>
      </div>
    </>
  )
}



/*export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  user, saldoAtual
}) => {
  return (
    <>
      <div className={Styles.header_mobile}>
        <div className={Styles.tres_itens}>
          <img className={Styles.logotipos} src={img} alt="" />
          <h1 className={Styles.boas_vindas}>ola,{}</h1>
          <img className={Styles.user_icon} src={profileicon} alt="" />
        </div>
        <div className={Styles.show_valores}>
          <h2 className={Styles.saldos}>
            Saldo Disponivel 
          </h2>
          <h2 className={Styles.valores}>R$ {saldoAtual}</h2>
        </div>
      </div>
    </>
  );
};*/
