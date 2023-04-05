import { useState } from "react";
import styles from "./transacaoComponent.module.css";

const CardTransacao = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      metodoDePagamento: "PIX",
      data: "03/04/2023",
      valorGasto: "4450",
      valorAnterior: "23456",
    },
    {
      id: "1",
      metodoDePagamento: "PIX",
      data: "03/04/2023",
      valorGasto: "4450",
      valorAnterior: "23456",
    },
  ]);

  return (
    <>
      <li className={styles.dados_transacao}>
        <div className={styles.div_dados}>
          <h3 className={styles.metodo_De_Pagamento}>cartao</h3>
          <p className={styles.data}>04/05/23</p>
          <p className={styles.estabelecimento}>padaria</p>
        </div>
        <div className={styles.div_valores}>
          <p className={styles.valor_gasto}>R$ 445,00</p>
          <p className={styles.valor_anterior}>R$ 4135,00</p>
        </div>
      </li>
      <li className={styles.dados_transacao}>
        <div className={styles.div_dados}>
          <h3 className={styles.metodo_De_Pagamento}>cartao</h3>
          <p className={styles.data}>04/05/23</p>
          <p className={styles.estabelecimento}>padaria</p>
        </div>
        <div className={styles.div_valores}>
          <p className={styles.valor_gasto}>R$ 445,00</p>
          <p className={styles.valor_anterior}>R$ 4135,00</p>
        </div>
      </li>
      <li className={styles.dados_transacao}>
        <div className={styles.div_dados}>
          <h3 className={styles.metodo_De_Pagamento}>cartao</h3>
          <p className={styles.data}>04/05/23</p>
          <p className={styles.estabelecimento}>padaria</p>
        </div>
        <div className={styles.div_valores}>
          <p className={styles.valor_gasto}>R$ 445,00</p>
          <p className={styles.valor_anterior}>R$ 4135,00</p>
        </div>
      </li>
      <li className={styles.dados_transacao}>
        <div className={styles.div_dados}>
          <h3 className={styles.metodo_De_Pagamento}>cartao</h3>
          <p className={styles.data}>04/05/23</p>
          <p className={styles.estabelecimento}>padaria</p>
        </div>
        <div className={styles.div_valores}>
          <p className={styles.valor_gasto}>R$ 445,00</p>
          <p className={styles.valor_anterior}>R$ 4135,00</p>
        </div>
      </li>
      <li className={styles.dados_transacao}>
        <div className={styles.div_dados}>
          <h3 className={styles.metodo_De_Pagamento}>cartao</h3>
          <p className={styles.data}>04/05/23</p>
          <p className={styles.estabelecimento}>padaria</p>
        </div>
        <div className={styles.div_valores}>
          <p className={styles.valor_gasto}>R$ 445,00</p>
          <p className={styles.valor_anterior}>R$ 4135,00</p>
        </div>
      </li>
    </>
  );
};

export default CardTransacao;
