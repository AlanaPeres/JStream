import React from "react";
import {ModalContainer, BtnVoltar, BtnConfirmar, InputSenha, Buttons} from '../modalTransferencia/modalTransferencia.style'
import { useState } from 'react';
import { Texto } from "./modalTransferencia.style";


export const ModalTransferenciaContent = ()=> {
    const [isModalVisible, setIsModalVisible] = useState(true);
      
    
    
    const fecharModal = () => {
        setIsModalVisible(false);
    }
    return (
        
        <div className="modalContent">
            {isModalVisible && (

            <ModalContainer>                    
            <Texto>
                <p>José de Alencar</p>
                <p>Caixa Econômica Federal</p>
                <p>AG: 5042</p>
                <p>CC: 010203-56</p>
                <p>Valor: R$ 100,00</p>               
            </Texto>      
                <Buttons>
                    <BtnVoltar onClick={fecharModal}>Voltar</BtnVoltar>
                    <InputSenha/>Senha
                    <BtnConfirmar onClick={fecharModal}>Confirmar</BtnConfirmar>
                </Buttons>
                </ModalContainer>
            )}    
        </div>
    )

}

export default ModalTransferenciaContent;