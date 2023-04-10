import styles from "./MonthlyBankStatementComponent.module.css";

type CardMonthProps = {
  month: string;
  balance: number;
};

const CardTransactions: React.FC<CardMonthProps> = ({ month, balance }) => {
  return (
    <>
      <button
        // onClick={colocar a chamado do modal aqui}
        className={styles.month}
      >
        <p>{month}</p>
        <p> {balance}</p>
      </button>
    </>
  );
};

export default CardTransactions;
