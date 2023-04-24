import styles from "./UserDataComponent.module.css";
import profilepic from "./../../assets/profile_icon.webp";
import { UsersManager } from "../../service/usersManagers";
import IUser from "../../interface/IUsers";
import { NavLink } from "react-router-dom";
import { ButtonLougoutTextComponent } from "../ButtonLogoutComponent/ButtonLogoutComponent";
import { useEffect, useState } from "react";
import axios from "axios";

export const UserDataComponent = () => {
  const usersManagers = new UsersManager();
  const user: IUser = usersManagers.getSessionUser();

  function handleClickLogoutButton() {
    usersManagers.logOut();
    const host = window.location.host;
    window.location.href = `http://${host}/login`;
}


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
      <div className={styles.DataContainer}>
        <img className={styles.userPicture} src={profilepic} />
        <h1 className={styles.Nome}>
          {user.nome} {user.sobrenome}
        </h1>
        <div className={styles.DadosDoBanco}>
          <h3 className={styles.BankData}>Agencia: 0001</h3>
          <h3 className={styles.BankData}>Conta: 00001-01</h3>
        </div>
        <p className={styles.Saldo}>R${saldo}</p>
        <div className={styles.DadosContato}>
          <p className={styles.Datamail}>{user.email}</p>
          <p className={styles.Datadress}>
            {user.cidade}, {user.estado}
          </p>
        </div>
        <NavLink to={"/saldo"}>
          <button className={styles.BtnVoltar}>VOLTAR</button>
          <ButtonLougoutTextComponent label="Sair" onClick={handleClickLogoutButton} />
        </NavLink>
      </div>
    </>
  );
};
