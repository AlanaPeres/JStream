import Style  from "./ButtonLogoutComponent.module.css";

export type ButtonLogoutTextComponentProps = {
    label: string
    onClick?: () => void 
}

export const ButtonLougoutTextComponent = ({
    label = 'Sair',
    onClick
}: ButtonLogoutTextComponentProps) => {
    return (
        <div className={Style.logout}>
            <button className={Style.btn_logout} type="button" onClick={onClick} >
                {label}
            </button>   
        </div>
    )
}
