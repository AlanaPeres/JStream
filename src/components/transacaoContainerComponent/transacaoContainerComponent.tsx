import { useState } from "react";
import CardTransacao from "../transacaoComponent/transacaoComponent";
import styles from "./transacaoContainerComponent.module.css";

type Card = {
  id: string;
  metodo_De_Pagamento: string;
  data_de_pagamento: string;
  estabelecimento: string;
  valor_gasto: number;
  valor_anterior: number;
}

const Transacoes: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: "1",
      metodo_De_Pagamento: "PIX",
      data_de_pagamento: "03/04/2023",
      estabelecimento: "padaria",
      valor_gasto: 4450,
      valor_anterior: 23456,
    },
    {
      id: "2",
      metodo_De_Pagamento: "Cartão",
      data_de_pagamento: "02/04/2023",
      estabelecimento: "supermercado",
      valor_gasto: 3000,
      valor_anterior: 18456,
    },
  ]);

  return (
    <div className={styles.transacao}>
      <ul>
        {cards.map((card) => (
          <CardTransacao
            key={card.id}
            metodo_De_Pagamento={card.metodo_De_Pagamento}
            data_de_pagamento={card.data_de_pagamento}
            estabelecimento={card.estabelecimento}
            valor_gasto={card.valor_gasto}
            valor_anterior={card.valor_anterior}
          />
        ))}
      </ul>
    </div>
  );
};

export default Transacoes;
