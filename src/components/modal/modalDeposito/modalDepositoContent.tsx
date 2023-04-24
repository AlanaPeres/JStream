import React from 'react';
import { ModalContainer, Btn, ContainerTexto, InputSenha, Buttons, Texto } from '../modalDeposito/modalDeposito.style';

import { useState } from 'react';

export const ModalDepositoContent = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const fecharModal = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="modalContent">
            {isModalVisible && (
                <ModalContainer>
                    <ContainerTexto>
                        <Texto>
                            <p>Depósito Realizado</p>
                            
                        </Texto>
                    </ContainerTexto>
                    <Buttons>
                        <Btn onClick={fecharModal}>Voltar</Btn>
                                </Buttons>
                </ModalContainer>
            )}
        </div>
    );
};

export default ModalDepositoContent;
