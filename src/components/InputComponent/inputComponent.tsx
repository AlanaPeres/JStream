import Style  from "./inputComponent.module.css";

export type InputTextComponentProps = {
    name: string
    label: string
    required?: boolean
    type?: string
}

export const InputTextComponent = ({
    name,
    label,
    required = true,
    type = 'text'
}: InputTextComponentProps) => {
    return (
        <div className={Style.form_group}>
            <input name={name} className={Style.input} type={type} required={required}/>
            <label className={Style.input_label} htmlFor={name}>{label}</label>
        </div>
    )
}
