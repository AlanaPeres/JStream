import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../saldoComponent/saldoComponent.module.css";
import Transacoes from "../transacaoContainerComponent/transacaoContainerComponent";

export const SaldoContent = () => {
  return (
    <>
      <div className={styles.content}>
        <HeaderMobile />
        <h1 className={styles.titulo}>Olá, Fulano</h1>
        <div className={styles.article}>
          <h2 className={styles.saldo}>
            <span className={styles.saldoword}>saldo:</span>{" "}
            <span className={styles.valorsaldo}>R$ valor</span>
          </h2>
          <h2 className={styles.ultimas_trans}>ultimas transações</h2>
          <div className={styles.container_transacao}>
            <Transacoes />
          </div>
        </div>
      </div>
    </>
  );
};
