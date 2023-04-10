import IUser from "../../interface/IUsers";
import { UsersManager } from "../../service/usersManagers";
import { HeaderMobile } from "../headerMobileComponent/headerMobileComponent";
import styles from "../saldoComponent/saldoComponent.module.css";
import Transacoes from "../transacaoContainerComponent/transacaoContainerComponent";
import { ButtonLougoutTextComponent } from "../ButtonLogoutComponent/ButtonLogoutComponent";

export const SaldoContent: React.FC = () => { 
  const usersManagers = new UsersManager();
  const user: IUser = usersManagers.getSessionUser();

  function handleClickLogoutButton() {
    usersManagers.logOut()
    const host = window.location.host;
    window.location.href = `http://${host}/login`;
  }

  return (
    <>
      <div className={styles.content}>
        <HeaderMobile user={user} />
        <div className={styles.top}>
          <h1 className={styles.titulo}>Olá, {user?.nome}</h1>
          <ButtonLougoutTextComponent label="Sair" onClick={handleClickLogoutButton} />
        </div>
        <div className={styles.article}>
          <h2 className={styles.saldo}>
            <span className={styles.saldoword}>Saldo: </span>
            <span className={styles.valorsaldo}>R$ { user.saldoAtual}</span>
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

