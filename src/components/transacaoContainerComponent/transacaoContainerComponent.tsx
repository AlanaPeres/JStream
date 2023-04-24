import { useEffect, useState } from "react";
import CardTransacao from "../transacaoComponent/transacaoComponent";
import styles from "./transacaoContainerComponent.module.css";
import axios from "axios";

type Card = {
  id: string;
  metodo_De_Pagamento: string;
  data_de_pagamento: string;
  destino: string;
  valor_gasto: number;
  valor_anterior: number;
};


const Transacoes: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://localhost:7079/api/Transacoes/987.654.321-12"
        );
        const data = response.data;
    
        const formattedData: Card[] = [
          {
            id: data.id.toString(),
            metodo_De_Pagamento: data.tipoTransacao,
            data_de_pagamento: new Date(data.dataHora).toLocaleDateString(),
            destino: data.cpfDestino,
            valor_gasto: data.valor,
            valor_anterior: data.valor,
          },
        ];
    
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
            valor_anterior={card.valor_anterior}
          />
        ))}
      </ul>
    </div>
  );
};

export default Transacoes;
