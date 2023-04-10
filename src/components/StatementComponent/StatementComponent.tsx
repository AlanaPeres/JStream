import IUser from "../../interface/IUsers";
import { UsersManager } from "../../service/usersManagers";
import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../StatementComponent/StatementComponent.module.css";
import BankTransactions from "../StatementContainerComponent/StatementContainerComponent";
import { ButtonLougoutTextComponent } from "../ButtonLogoutComponent/ButtonLogoutComponent";

type BalanceContentProps = {
  user: IUser;
};

export const StatementComponent: React.FC<BalanceContentProps> = ({ user }) => {
  const usersManagers = new UsersManager();

  function handleClickLogoutButton() {
    usersManagers.logOut()
    const host = window.location.host;
    window.location.href = `http://${host}/login`;
  }

  return (
    <>
      <div>
        <div className={styles.content}>
          <HeaderMobile user={user} />
          <div className={styles.top}>
            <h1 className={styles.title}>Olá, {user.nome}</h1>
            <ButtonLougoutTextComponent label="Sair" onClick={handleClickLogoutButton} />
        </div>
          <div className={styles.article}>
            <h2 className={styles.statement}>
              <span className={styles.statementWord}>Saldo:</span>
              <span className={styles.statementAmount}>
                R$ {user.saldoAtual}
              </span>
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
