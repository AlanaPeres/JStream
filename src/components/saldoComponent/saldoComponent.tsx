import { useEffect, useState } from "react";
import IUser from "../../interface/IUsers";
import {contaService} from "../../service/contaService";
import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../saldoComponent/saldoComponent.module.css";
import Transacoes from "../transacaoContainerComponent/transacaoContainerComponent";


type SaldoContentProps = {
  user: IUser;
  
}

export const SaldoContent: React.FC<SaldoContentProps> = ({
  user
}) => {
 user = contaService.getUserLogged('usuario');
  return (
    <>
      <div className={styles.content}>
        <HeaderMobile user={user} />
        <h1 className={styles.titulo}>Olá, {user.nome}</h1>
        <div className={styles.article}>
          <h2 className={styles.saldo}>
            <span className={styles.saldoword}>Saldo: </span>
            <span className={styles.valorsaldo}>R${user.saldoAtual}</span>
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

