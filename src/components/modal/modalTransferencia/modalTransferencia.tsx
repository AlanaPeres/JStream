import { EstruturaModal } from "../estruturaModal";
import { IsOpen } from "../isModalOpen";
import { ModalTransferenciaContent } from "./modalTransferenciaContent";

interface modalTransferenciaProps{
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

export const modalTransferencia: React.FC<modalTransferenciaProps> = ({onBackdropClick, isModalVisible}) =>{
    if(!isModalVisible){
        return null
    }

    return (
        <IsOpen onBackdropClick ={onBackdropClick}>
        
            <EstruturaModal>
                <ModalTransferenciaContent/>            
            </EstruturaModal>
        
        </IsOpen>
    )
}

export default modalTransferencia;

