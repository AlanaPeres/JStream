import Style  from "./ButtonComponent.module.css";
import { Link } from 'react-router-dom';

export type ButtonTextComponentProps = {
    type?: "submit" ,
    description: string
    onClick?: () => void
    
}

export const ButtonTextComponent = ({
    type,
    description = 'text',
    onClick
}: ButtonTextComponentProps) => {
    return (
        <div className={Style.form_btn}>
            <button className={Style.btn} type={type} onClick={onClick} >
                {description}
            </button>   
        </div>
    )
}
