import { useState } from 'react'
import ModalTransferencia from './modalTransferencia'
import style from '../../transferenciaComponent/transferenciaComponent.module.css'

export const MostrarModalTransferencia = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const alterarModal = () =>{
      setIsModalVisible(wasModalVisible => !wasModalVisible)
    }
    return(
       <>    
         <button onClick={alterarModal} className={style.btn} type="submit" >
           <ModalTransferencia isModalVisible={isModalVisible}onBackdropClick={alterarModal}/>
          Próximo
          </button>   
         {/* <ModalTransferencia isModalVisible={isModalVisible}onBackdropClick={alterarModal}/> */}
       </>
    );   
}

