import IUser from "../../interface/IUsers";
import { UsersManager } from "../../service/usersManagers";
import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../saldoComponent/saldoComponent.module.css";
import Transacoes from "../transacaoContainerComponent/transacaoContainerComponent";
import { ButtonLougoutTextComponent } from "../ButtonLogoutComponent/ButtonLogoutComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export const SaldoContent: React.FC = () => {
  const usersManagers = new UsersManager();
  const user: IUser = usersManagers.getSessionUser();

  

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
      <div className={styles.content}>
        <HeaderMobile user={user} />
        <div className={styles.top}>
          <h1 className={styles.titulo}>Olá, {user?.nome}</h1>
          
        </div>
        <div className={styles.article}>
          <h2 className={styles.saldo}>
            <span className={styles.saldoword}>Saldo: </span>
            <span className={styles.valorsaldo}>R$ {saldo}</span>
          </h2>
          <h2 className={styles.ultimas_trans}>ultimas transações</h2>
          <div className={styles.container_transacao}>
            <Transacoes />
          </div>
        </div>
      </div>
    </>
  );
};
