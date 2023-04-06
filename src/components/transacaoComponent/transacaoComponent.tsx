import styles from "./transacaoComponent.module.css";

type CardTransacaoProps = {
  metodo_De_Pagamento: string;
  data_de_pagamento: string;
  estabelecimento: string;
  valor_gasto: number;
  valor_anterior: number;
};

const CardTransacao: React.FC<CardTransacaoProps> = ({
  metodo_De_Pagamento,
  data_de_pagamento,
  estabelecimento,
  valor_gasto,
  valor_anterior,
}) => {
  return (
    <>
      <li className={styles.dados_transacao}>
        <div className={styles.div_dados}>
          <h3 className={styles.metodo_De_Pagamento}>{metodo_De_Pagamento}</h3>
          <p className={styles.data}>{data_de_pagamento}</p>
          <p className={styles.estabelecimento}>{estabelecimento}</p>
        </div>
        <div className={styles.div_valores}>
          <p className={styles.valor_gasto}>R$ {valor_gasto}</p>
          <p className={styles.valor_anterior}>R$ {valor_anterior}</p>
        </div>
      </li>
    </>
  );
};

export default CardTransacao;
