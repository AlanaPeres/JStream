import { useState } from 'react';
import ModalDeposito from './modalDeposito';
import style from '../../transferenciaComponent/transferenciaComponent.module.css';

export const MostrarModalDeposito = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const alterarModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible);
    };
    return (
        <>
            <button onClick={alterarModal} className={style.btn} type="submit">
                Próximo
            </button>
            {<ModalDeposito isModalVisible={isModalVisible} onBackdropClick={alterarModal} />}
        </>
    );
};
