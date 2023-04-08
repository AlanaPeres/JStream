import { useState } from "react";
import styles from "./StatementContainerComponent.module.css";
import CardTransactions from "../MonthlyBankStatementComponent/MonthlyBankStatementComponent";

type Card = {
  id: string;
  month: string;
  balance: number;
};

const BankTransactions: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: "1",
      month: "JAN/23",
      balance: 4.451,
    },
    {
      id: "2",
      month: "FEV/23",
      balance: 3.007,
    },
    {
      id: "3",
      month: "MAR/23",
      balance: 3.985,
    },
    {
      id: "4",
      month: "ABR/23",
      balance: 2.003,
    },
    {
      id: "5",
      month: "MAI/23",
      balance: 5.899,
    },
    {
      id: "6",
      month: "JUN/23",
      balance: 7.007,
    },
    {
      id: "7",
      month: "JUL/23",
      balance: 9.001,
    },
    {
      id: "8",
      month: "AGO/23",
      balance: 10.012,
    },
    {
      id: "9",
      month: "SET/23",
      balance: 4.007,
    },
    {
      id: "10",
      month: "OUT/23",
      balance: 1.089,
    },
    {
      id: "11",
      month: "NOV/23",
      balance: 3.201,
    },
    {
      id: "12",
      month: "DEZ/23",
      balance: 3.677,
    },
  ]);

  return (
    <div className={styles.transactions}>
      <ul>
        {cards.map((card) => (
          <CardTransactions
            key={card.id}
            month={card.month}
            balance={card.balance}
          />
        ))}
      </ul>
    </div>
  );
};

export default BankTransactions;
