import IUser from "../../interface/IUsers";
import { contaService } from "../../service/contaService";
import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../StatementComponent/StatementComponent.module.css";
import BankTransactions from "../StatementContainerComponent/StatementContainerComponent";

type BalanceContentProps = {
  user: IUser;
};

export const StatementComponent: React.FC<BalanceContentProps> = ({ user }) => {
  return (
    <>
      <div>
        <div className={styles.content}>
          <HeaderMobile user={user} />
          <h1 className={styles.title}>Olá, {user.nome}</h1>
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
