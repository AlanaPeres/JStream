import { useEffect, useState } from "react";
import img from "../../assets/logo_dark.webp";
import profileicon from "../../assets/profile_icon.webp";
import IUser from "../../interface/IUsers";
import { UsersManager } from "../../service/usersManagers";
import Styles from "./headerMobileComponent.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

type HeaderMobileProps = {
  user: IUser;
};

const usersManagers = new UsersManager();
const user: IUser = usersManagers.getSessionUser();


export const HeaderMobile: React.FC<HeaderMobileProps> = ({ user }) => {



  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://localhost:7079/Contas/${user.cpf}`)
      .then((response) => {
        // Aqui você pode acessar os dados da resposta
        setSaldo(response.data.saldo);
      })
      .catch((error) => {
        // Aqui você pode lidar com erros que ocorrem durante a requisição
        console.error(error);
      });
  }, []);
  

  return (
    <>
      <div className={Styles.header_mobile}>
        <div className={Styles.tres_itens}>
        <NavLink to={"/"}><img className={Styles.logotipos} src={img} alt="" />  </NavLink>        
          <h1 className={Styles.boas_vindas}>ola,{user.nome}</h1>
          <NavLink to={"/perfil"}>
            {" "}
            <img className={Styles.user_icon} src={profileicon} alt="" />{" "}
          </NavLink>
        </div>
        <div className={Styles.show_valores}>
          <h2 className={Styles.saldos}>Saldo Disponivel</h2>
          <h2 className={Styles.valores}>R$ {saldo}</h2>
        </div>
      </div>
    </>
  );
};
