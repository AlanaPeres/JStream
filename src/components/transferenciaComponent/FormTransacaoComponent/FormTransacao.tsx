import style from '../transferenciaComponent.module.css';
import { MostrarModalTransferencia } from '../../modal/modalTransferencia/mostrarModal';

export const FormTransacao = () => {
    return (
        <form className={style.form}>
            <div className={style.col_1}>
                <div className={style.container_input_label}>
                    <input type="text" pattern="[A-Za-z]+" required autoComplete="off" placeholder="Tipo de conta"></input>
                    <label></label>
                </div>

                <div className={style.container_input_label}>
                    <input type="number" pattern="[0-9]{3}" maxLength={3} minLength={3} required autoComplete="off" placeholder="Cod do banco"></input>
                    <label></label>
                </div>
            </div>

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
                {/* <button className={style.btn} type="submit">Próximo</button> */}
                <MostrarModalTransferencia />
            </div>
        </form>
    );
};
