import Style  from "./ButtonComponent.module.css";

export type ButtonTextComponentProps = {
    type?: "submit" ,
    description: string
    onClick?: () => void
    
}

export const ButtonTextComponent = ({
    type,
    description = 'button',
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
