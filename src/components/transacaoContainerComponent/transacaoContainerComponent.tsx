import { useState } from "react";
import CardTransacao from "../transacaoComponent/transacaoComponent";
import styles from "./transacaoContainerComponent.module.css";

type Card = {
  id: string;
  metodo_De_Pagamento: string;
  data_de_pagamento: string;
  destino: string;
  valor_gasto: number;
  valor_anterior: number;
};

const Transacoes: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: "1",
      metodo_De_Pagamento: "PIX",
      data_de_pagamento: "03/04/2023",
      destino: "padaria",
      valor_gasto: 4.451,
      valor_anterior: 23.456,
    },
    {
      id: "2",
      metodo_De_Pagamento: "Cartão",
      data_de_pagamento: "02/04/2023",
      destino: "supermercado",
      valor_gasto: 3.007,
      valor_anterior: 18.456,
    },
    {
      id: "3",
      metodo_De_Pagamento: "Depósito",
      data_de_pagamento: "03/04/2023",
      destino: "Soft Finance",
      valor_gasto: 4.451,
      valor_anterior: 23.456,
    },
    {
      id: "4",
      metodo_De_Pagamento: "Cartão",
      data_de_pagamento: "02/04/2023",
      destino: "supermercado",
      valor_gasto: 3007,
      valor_anterior: 18.456,
    },
    {
      id: "5",
      metodo_De_Pagamento: "Depósito",
      data_de_pagamento: "03/04/2023",
      destino: "Soft Finance",
      valor_gasto: 4.451,
      valor_anterior: 23.456,
    },
    {
      id: "6",
      metodo_De_Pagamento: "Cartão",
      data_de_pagamento: "02/04/2023",
      destino: "supermercado",
      valor_gasto: 3007,
      valor_anterior: 18.456,
    },
    {
      id: "7",
      metodo_De_Pagamento: "PIX",
      data_de_pagamento: "03/04/2023",
      destino: "padaria",
      valor_gasto: 4.451,
      valor_anterior: 23.456,
    },
    {
      id: "8",
      metodo_De_Pagamento: "Cartão",
      data_de_pagamento: "02/04/2023",
      destino: "supermercado",
      valor_gasto: 3007,
      valor_anterior: 18.456,
    },
    {
      id: "9",
      metodo_De_Pagamento: "Depósito",
      data_de_pagamento: "03/04/2023",
      destino: "Soft Finance",
      valor_gasto: 4.451,
      valor_anterior: 23.456,
    },
    {
      id: "10",
      metodo_De_Pagamento: "Cartão",
      data_de_pagamento: "02/04/2023",
      destino: "supermercado",
      valor_gasto: 3007,
      valor_anterior: 18.456,
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
