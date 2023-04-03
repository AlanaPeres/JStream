import { IsOpen } from "../isModalOpen";
import { EstruturaModal } from "../estruturaModal";
import { ContentRecuperarSenha } from "./modalContent";

interface BaseModalProps{
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

export const BaseModalRecuperaSenha = ({onBackdropClick, isModalVisible} : BaseModalProps) =>{
    if(!isModalVisible){
        return null
    }

    return (
        <IsOpen onBackdropClick ={onBackdropClick}>
        
            <EstruturaModal>
                <ContentRecuperarSenha />
            </EstruturaModal>
        
        </IsOpen>
    );
}
