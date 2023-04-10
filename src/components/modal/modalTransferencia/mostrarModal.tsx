import { useState } from 'react'
import { ModalTransferenciaContent } from './modalTransferenciaContent'

export const MostrarModalTransferencia = () =>{

    const [isModalVisible, setIsModalVisible] = useState(false)
    const alterarModal = () =>{
      setIsModalVisible(wasModalVisible => !wasModalVisible)
    }
  
    return(
       <>
         Li e concordo com os <a href='#' onClick={alterarModal}>termos e condições</a>                                 
         <ModalTransferenciaContent isModalVisible={isModalVisible}onBackdropClick={alterarModal}/>
       </>
    );   
}