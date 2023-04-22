import style from './transferenciaComponent.module.css';
import { UsersManager } from '../../service/usersManagers';
import { ButtonLougoutTextComponent } from '../ButtonLogoutComponent/ButtonLogoutComponent';
import { MostrarModalTransferencia } from '../modal/modalTransferencia/mostrarModal';
import { FormTransacao } from './FormTransacaoComponent/FormTransacao';
import { Tabs } from '../TabComponent/Tabs';

export const TransferenciaContent = () => {
    const usersManagers = new UsersManager();

    function handleClickLogoutButton() {
        usersManagers.logOut();
        const host = window.location.host;
        window.location.href = `http://${host}/login`;
    }

    return (
        <div className={style.container}>
            <div className={style.top}>
                {/* <div className={style.container_title_desktop}>
                    <h3 className={style.title_desktop}>Transferência</h3>
                </div> */}
                <ButtonLougoutTextComponent label="Sair" onClick={handleClickLogoutButton} />
            </div>
            <div className={style.content}>
                {/* <h3 className={style.title_mobile}>Transferência</h3> */}
                <Tabs abas={['Transferência', 'Depósito']} />
            </div>
        </div>
    );
};
