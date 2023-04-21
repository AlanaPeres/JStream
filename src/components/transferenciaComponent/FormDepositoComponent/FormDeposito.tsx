import style from '../transferenciaComponent.module.css';
import { MostrarModalDeposito } from '../../modal/modalDeposito/mostrarModal';

export const FormDeposito = () => {
    return (
        <form className={style.form}>
            <div className={style.col_2}>
                <div className={style.container_input_label}>
                    <input type="number" pattern="[0-9]*" autoComplete="0ff" required placeholder="agência"></input>
                    <label></label>
                </div>
                <div className={style.container_input_label}>
                    <input type="number" pattern="[0-9]*" autoComplete="off" required placeholder="Nº conta"></input>
                    <label></label>
                </div>
            </div>

            <div className={style.col_3}>
                <div className={style.container_input_label}>
                    <input type="number" inputMode="numeric" pattern="[0-9.,]+" autoComplete="off" required placeholder="Valor"></input>
                    <label></label>
                </div>
            </div>
            <div className={style.container_btn}>
                <MostrarModalDeposito />
            </div>
        </form>
    );
};
