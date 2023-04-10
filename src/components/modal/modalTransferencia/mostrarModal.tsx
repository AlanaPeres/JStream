import { useState } from 'react'
import { ModalTransferenciaContent}  from './modalTransferenciaContent'
import ModalTransferencia from './modalTransferencia'

export const MostrarModalTransferencia = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const alterarModal = () =>{
      setIsModalVisible(wasModalVisible => !wasModalVisible)
    }
    return(
       <>                            
         <ModalTransferencia isModalVisible={isModalVisible}onBackdropClick={alterarModal}/>
       </>
    );   
}

