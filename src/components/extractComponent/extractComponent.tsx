import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../extractComponent/extractComponent.module.css";
import Transacoes from "../transacaoContainerComponent/transacaoContainerComponent";

type SaldoContentProps = {
  user: string;
  saldoAtual: number;
};

export const ExtractComponent: React.FC<SaldoContentProps> = ({
  user,
  saldoAtual,
}) => {
  return (
    <>
      <div>
        <div className={styles.content}>
          <HeaderMobile user={user} saldoAtual={saldoAtual} />
          <h1 className={styles.title}>Olá, {user}</h1>
          <div className={styles.article}>
            <h2 className={styles.extract}>
              <span className={styles.extractWord}>Saldo:</span>{" "}
              <span className={styles.valorExtract}>R$ {saldoAtual}</span>
            </h2>
            <div className={styles.ultimas_trans}></div>
            <h2>EXTRATO</h2>
            <div className={styles.container_transacao}>
              <Transacoes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
