import * as React from "react"
import Style from './SignUpComponent.module.css'
import { STATES_BR } from './constants'
import logoDark from '../../assets/logo dark.png'
import logoColorized from '../../assets/logo colorized.png'

type InputTextComponentProps = {
    name: string
    label: string
    required?: boolean
    type?: string
}

const InputTextComponent = ({
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

const SignUpForm = () => {
    const handleClickBackButton = () => {
        window.history.back();
    }
    return (
        <div className={Style.sign_up}>
            <div>
                <img className={Style.logo_dark} src={logoDark} alt="Imagem da logo" />
                <img className={Style.logo_colorized} src={logoColorized} alt="Imagem da logo" />
            </div>
            <form>
                <div className={Style.form_content}>
                    <InputTextComponent name="name" label="Nome" />
                    <InputTextComponent name="last_name" label="Sobrenome" />
                    <InputTextComponent name="password" label="Senha" type="password" />
                    <InputTextComponent name="confirm_password" label="Confirmar senha" type="password" />
                    <InputTextComponent name="date_of_birth" label="Data de nascimento" type="date" />
                    <InputTextComponent name="cep" label="CEP" />
                    <InputTextComponent name="street" label="Rua" />
                    <InputTextComponent name="number" label="Número"/>
                    <InputTextComponent name="complement" label="Complemento" />
                    <InputTextComponent name="neighborhood" label="Bairro" />
                    <InputTextComponent name="city" label="Cidade"/>
                    
                    <div className={Style.form_group}>
                        <select className={Style.group_uf} name="uf">
                            <option selected>UF</option>
                            {STATES_BR.map(({ value, text }) => <option value={value}>{text}</option>)}
                        </select>
                    </div>
                </div>
                <div className={Style.terms_conditions_group} >
                    <input className={Style.checkbox_input} name="terms_conditions_label" type="checkbox" required/>
                    <label className={Style.terms_conditions_label} htmlFor="terms_conditions_label" >
                        Li e concordo com os <a href="#">termos e condições</a>.
                    </label>
                </div>
                <div className={Style.form_btn}>               
                    <button className={Style.btn_sign_up} type="submit">Criar conta</button>  
                    <button className={Style.btn_sign_up} onClick={handleClickBackButton}>Voltar</button>         
                </div>
            </form>
            </div>
    );
}

export default SignUpForm;
