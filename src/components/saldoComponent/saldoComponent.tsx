import IUser from "../../interface/IUsers";
import contaService from "../../service/contaService";
import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../saldoComponent/saldoComponent.module.css";
import Transacoes from "../transacaoContainerComponent/transacaoContainerComponent";

type SaldoContentProps = {
  user: string;
  saldoAtual: number;
}

let currentUser: any = contaService.getUserLogged();
alert(currentUser)
export const SaldoContent: React.FC<SaldoContentProps> = ({
  user, saldoAtual
}) => {

  return (
    <>
      <div className={styles.content}>
        <HeaderMobile user={currentUser.nome} saldoAtual={currentUser.saldoAtual} />
        <h1 className={styles.titulo}>Olá, {currentUser.nome}</h1>
        <div className={styles.article}>
          <h2 className={styles.saldo}>
            <span className={styles.saldoword}>saldo:</span>{" "}
            <span className={styles.valorsaldo}>R$ {currentUser.saldoAtual}</span>
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