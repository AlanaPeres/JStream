import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../StatementComponent/StatementComponent.module.css";
import BankTransactions from "../StatementContainerComponent/StatementContainerComponent";

type BalanceContentProps = {
  user: string;
  currentBalance: number;
};

export const StatementComponent: React.FC<BalanceContentProps> = ({
  user,
  currentBalance,
}) => {
  return (
    <>
      <div>
        <div className={styles.content}>
          <HeaderMobile user={user} currentBalance={currentBalance} />
          <h1 className={styles.title}>Olá, {user}</h1>
          <div className={styles.article}>
            <h2 className={styles.statement}>
              <span className={styles.statementWord}>Saldo:</span>
              <span className={styles.statementAmount}>
                R$ {currentBalance}
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
