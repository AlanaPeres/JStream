import { Titulo, BtnFechar, ContainerBtnFechar, Formulario, ContainerInputModal, BtnEnviarEmail} from "./modal.style"
import { ModalContainer } from "../modalGlobal.style"
import { useState } from 'react';

export const ContentRecuperarSenha = ()=>{
    const [isModalVisible, setIsModalVisible] = useState(true);
    
    const fecharModal = () => {
        setIsModalVisible(false);
    }

    return(
        <>
        {isModalVisible && (
            <ModalContainer>
            <ContainerBtnFechar>
                <BtnFechar onClick={fecharModal}>X</BtnFechar>
            </ContainerBtnFechar>

            <Titulo>Mudar senha</Titulo>

            <Formulario> 
                <ContainerInputModal>
                    <input type="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" autoComplete="off"/>
                    <label htmlFor="email">e-mail</label>
                </ContainerInputModal>

                <BtnEnviarEmail type="submit">Enviar</BtnEnviarEmail>
            </Formulario>
          
        </ModalContainer>
        )}
       </>
    )
}