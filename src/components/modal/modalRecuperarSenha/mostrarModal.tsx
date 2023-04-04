import { BaseModalRecuperaSenha } from "./modalRecuperarSenha";
import { useState } from 'react';
import { BtnEsqueciSenha } from "./modal.style";

export const MostrarModal = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const alterarModal = () =>{
      setIsModalVisible(wasModalVisible => !wasModalVisible)
    }
    return(
       <>
        <BtnEsqueciSenha onClick={alterarModal}>Esqueci a senha</BtnEsqueciSenha>
        <BaseModalRecuperaSenha isModalVisible={isModalVisible} onBackdropClick={alterarModal}/>
       </>
    );   
}