import ReactDOM  from "react-dom";
import * as React from "react";

interface ModalProps{
    onBackdropClick: () => void;
    children: React.ReactNode;
}

export const IsOpen = ({onBackdropClick, children} : ModalProps) =>{
    return ReactDOM.createPortal(
    <div>
        <span></span>
        {children}
    </div>, 
    document.getElementById('modalRoot')!);
}
