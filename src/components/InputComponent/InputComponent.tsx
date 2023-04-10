import Style  from "./InputComponent.module.css";

export type InputTextComponentProps = {
    name: string
    label: string
    pattern?: string
    required?: boolean
    type?: string
    onChange?: (event:any) => void
    value?: string
}

export const InputTextComponent = ({
    name,
    label,
    pattern,
    required = true,
    type = 'text',
    onChange,
    value
}: InputTextComponentProps) => {
    return (
        <div className={Style.form_group}>
            <input 
                name={name}
                placeholder={label}
                className={Style.input} 
                type={type} 
                required={required} 
                pattern={pattern} 
                onChange={onChange} 
                value={value}/>
            <label className={Style.input_label} htmlFor={name}>{label}</label>
        </div>
    )
}