import styles from "../saldoComponent/saldoComponent.module.css";

export const SaldoContent = () => {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.titulo}>Olá, Fulano</h1>
        <div className={styles.article}>
          <h2 className={styles.saldo}>
            saldo: <span className={styles.valorsaldo}>R$ valor</span>
          </h2>
          <h2 className={styles.ultimas_trans}>ultimas transações</h2>
        <div className={styles.transacoes}>


        </div>

        </div>
      </div>
    </>
  );
};
