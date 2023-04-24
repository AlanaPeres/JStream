import IUser from "../../interface/IUsers";
import { UsersManager } from "../../service/usersManagers";
import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../StatementComponent/StatementComponent.module.css";
import BankTransactions from "../StatementContainerComponent/StatementContainerComponent";
import { ButtonLougoutTextComponent } from "../ButtonLogoutComponent/ButtonLogoutComponent";
import { useEffect, useState } from "react";
import axios from "axios";

type BalanceContentProps = {
  user: IUser;
};

export const StatementComponent: React.FC<BalanceContentProps> = ({ user }) => {
  const usersManagers = new UsersManager();

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
      <div>
        <div className={styles.content}>
          <HeaderMobile user={user} />
          <div className={styles.top}>
            <h1 className={styles.title}>Olá, {user.nome}</h1>
          </div>
          <div className={styles.article}>
            <h2 className={styles.statement}>
              <span className={styles.statementWord}>Saldo:</span>
              <span className={styles.statementAmount}>R$ {saldo}</span>
            </h2>
            <div className={styles.extract}>
              <p>EXTRATO</p>
            </div>
            <div>
              <BankTransactions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
