import React from "react";
import {ModalContainer, Btn, ContainerTexto, InputSenha, Buttons, Texto} from '../../modal/modalTransferencia/modalTransferencia.style'

import { useState } from 'react';


export const ModalTransferenciaContent = ()=> {
    const [isModalVisible, setIsModalVisible] = useState(true);
      
    
    
    const fecharModal = () => {
        setIsModalVisible(false);
    }
    return (
        
        <div className="modalContent">
            {isModalVisible && (

            <ModalContainer>   
                <ContainerTexto>
                    <Texto>
                        <p>José de Alencar</p>
                        <p>Caixa Econômica Federal</p>
                        <p>AG: 5042</p>
                        <p>CC: 010203-56</p>
                        <p>Valor: R$ 100,00</p>               
                    </Texto>      
                </ContainerTexto>                 
                 <Buttons>
                    <Btn onClick={fecharModal}>Voltar</Btn>
                    <InputSenha placeholder="Senha" />
                    <Btn onClick={fecharModal}>Confirmar</Btn>
                </Buttons>  
            </ModalContainer>
            )}    
        </div>
    )

}

export default ModalTransferenciaContent;