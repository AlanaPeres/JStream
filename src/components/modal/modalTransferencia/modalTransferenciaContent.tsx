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
                        <p>Transação Realizada</p>
                                 
                    </Texto>      
                </ContainerTexto>                 
                 <Buttons>
                    <Btn onClick={fecharModal}>Voltar</Btn>
                </Buttons>  
            </ModalContainer>
            )}    
        </div>
    )

}

export default ModalTransferenciaContent;