import React, { useState } from 'react'
import ModalTermos from './modalTermos'
import Style from '.../SignUpComponent/SignUpComponent.module.css'

export const MostrarModalTermos = () =>{

    const [isModalVisible, setIsModalVisible] = useState(false)
    const alterarModal = () =>{
      setIsModalVisible(wasModalVisible => !wasModalVisible)
    }
  
    return(
       <>
         Li e concordo com os <a href='#' onClick={alterarModal}>termos e condições</a>                                 
         <ModalTermos isModalVisible={isModalVisible}onBackdropClick={alterarModal}/>
       </>
    );   
}
  