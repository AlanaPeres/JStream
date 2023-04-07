import React from "react";
import {IsOpen} from '../isModalOpen'
import {EstruturaModal} from "../estruturaModal"
import {ModalTermoseCondicoes} from '../modalTermosECondicoes/modalTermosContent'

interface modalTermosProps{
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

export const ModalTermos: React.FC<modalTermosProps> = ({onBackdropClick, isModalVisible}) =>{
    if(!isModalVisible){
        return null
    }

    return (
        <IsOpen onBackdropClick ={onBackdropClick}>
        
            <EstruturaModal>
                <ModalTermoseCondicoes/>            
            </EstruturaModal>
        
        </IsOpen>
    )
}

export default ModalTermos;