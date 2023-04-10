// import { BaseModalRecuperaSenha } from './modalRecuperarSenha';
import { useState } from 'react';
// import { BtnEsqueciSenha } from './modal.style';
import React from 'react';
import { BaseModalExtrato } from './modalExtrato';

export const MostrarModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    //     return (
    //         <>
    //             <BtnEsqueciSenha onClick={alterarModal}>Esqueci a senha</BtnEsqueciSenha>
    //             <BaseModalRecuperaSenha isModalVisible={isModalVisible} onBackdropClick={alterarModal} />
    //         </>
    //     );
    // };

    const alterarModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible);
    };

    return (
        <>
            <button onClick={alterarModal}>Open Modal</button>

            <BaseModalExtrato isModalVisible={isModalVisible} onBackdropClick={alterarModal} />
        </>
    );
};
