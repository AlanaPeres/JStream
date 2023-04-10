import { useState } from 'react'
import { ModalTransferenciaContent}  from './modalTransferenciaContent'

export const MostrarModalTransferencia = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const alterarModal = () =>{
      setIsModalVisible(wasModalVisible => !wasModalVisible)
    }
    return(
       <>                            
         <ModalTransferenciaContent isModalVisible={isModalVisible}onBackdropClick={alterarModal}/>
       </>
    );   
}