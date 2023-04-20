import style from "./transferenciaComponent.module.css";
import { UsersManager } from "../../service/usersManagers";
import { ButtonLougoutTextComponent } from "../ButtonLogoutComponent/ButtonLogoutComponent";
import { MostrarModalTransferencia } from "../modal/modalTransferencia/mostrarModal";

export const TransferenciaContent = () => {
  const usersManagers = new UsersManager();

  function handleClickLogoutButton() {
    usersManagers.logOut();
    const host = window.location.host;
    window.location.href = `http://${host}/login`;
  }

  return (
    <div className={style.article}>
          <div className={style.btnsair}>
            <ButtonLougoutTextComponent
              label="Sair"
              onClick={handleClickLogoutButton}
            />
          </div>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.container_title_desktop}>
            <h3 className={style.title_desktop}>Transferência</h3>
          </div>
        </div>
        <div className={style.content}>
          <h3 className={style.title_mobile}>Transferência</h3>
          <form className={style.form}>
            <div className={style.col_1}>
              <div className={style.container_input_label}>
                <input
                  type="number"
                  pattern="[0-9]{3}"
                  maxLength={3}
                  minLength={3}
                  required
                  autoComplete="off"
                  placeholder="Cod do banco"
                ></input>
                <label></label>
              </div>
              <div className={style.container_input_label}>
                <input
                  type="number"
                  pattern="[0-9]*"
                  autoComplete="0ff"
                  required
                  placeholder="agência"
                ></input>
                <label></label>
              </div>
            </div>
            <div className={style.col_2}>
              <div className={style.container_input_label}>
                <input
                  type="number"
                  pattern="[0-9]*"
                  autoComplete="off"
                  required
                  placeholder="Nº conta"
                ></input>
                <label></label>
              </div>
              <div className={style.container_input_label}>
                <input
                  type="number"
                  pattern="[0-9.,]+"
                  autoComplete="off"
                  required
                  placeholder="valor"
                ></input>
                <label></label>
              </div>
            </div>
            <div className={style.col_3}>
            <div className={style.container_btn}>
              {/* <button className={style.btn} type="submit">Próximo</button> */}
              <MostrarModalTransferencia />
            </div>
      
            <div className={style.container_btn}>
              {/* <button className={style.btn} type="submit">Próximo</button> */}
              <MostrarModalTransferencia />
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
