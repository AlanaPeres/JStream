import { useEffect, useState } from "react";
import { UsersManager } from "../../service/usersManagers";
import CardTransacao from "../transacaoComponent/transacaoComponent";
import styles from "./transacaoContainerComponent.module.css";
import axios from "axios";
import IUser from "../../interface/IUsers";

type Card = {
  id: string;
  metodo_De_Pagamento: string;
  data_de_pagamento: string;
  destino: string;
  valor_gasto: number;
  valor_anterior: number;
};

const usersManagers = new UsersManager();
const user: IUser = usersManagers.getSessionUser();

const Transacoes: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://localhost:7079/api/Transacoes/${user.cpf}`
        );
        const data = response.data;
    
        const formattedData: Card[] = data.map((transaction: any) => ({
          id: transaction.id.toString(),
          metodo_De_Pagamento: transaction.tipoTransacao,
          data_de_pagamento: new Date(transaction.dataHora).toLocaleDateString(),
          destino: transaction.cpfDestino,
          valor_gasto: transaction.valor,
          valor_anterior: transaction.valor,
        }));
    
        setCards(formattedData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.transacao}>
      <ul>
        {cards.map((card) => (
          <CardTransacao
            key={card.id}
            metodo_De_Pagamento={card.metodo_De_Pagamento}
            data_de_pagamento={card.data_de_pagamento}
            destino={card.destino}
            valor_gasto={card.valor_gasto}
    
          />
        ))}
      </ul>
    </div>
  );
};

export default Transacoes;
