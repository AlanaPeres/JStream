import CardTransacao from "../transacaoComponent/transacaoComponent";
import styles from "./transacaoContainerComponent.module.css";

const Transacoes = () => {
  return (
    <>
      <div className={styles.transacao}>
        <ul>
          <CardTransacao/>
        </ul>
      </div>
    </>
  );
};

export default Transacoes;
