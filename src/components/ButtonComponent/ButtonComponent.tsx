import Style  from "./ButtonComponent.module.css";
import { Link } from 'react-router-dom';

export type ButtonTextComponentProps = {
    type?: "submit" ,
    description: string
    
}

export const ButtonTextComponent = ({
    type,
    description = 'text'
    
}: ButtonTextComponentProps) => {
    return (
        <div className={Style.form_btn}>
            <button className={Style.btn} type={type}>
                {description}
            </button>   
        </div>
    )
}
