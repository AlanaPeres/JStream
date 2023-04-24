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
                            <p>Você confirma que deseja fazer um Depósito?</p>
                            <p>Valor: R$ 100,00</p>
                        </Texto>
                    </ContainerTexto>
                    <Buttons>
                        <Btn onClick={fecharModal}>Voltar</Btn>
                        <Btn type='button' onClick={fecharModal}>Confirmar</Btn>
                    </Buttons>
                </ModalContainer>
            )}
        </div>
    );
};

export default ModalDepositoContent;
