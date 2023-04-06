import Style from './SignUpComponent.module.css'
import { STATES_BR } from './constants'
import { InputTextComponent } from "../InputComponent/InputComponent"
import { ButtonTextComponent } from "../ButtonComponent/ButtonComponent"
import logoDark from '../../assets/logo dark.png'
import logoColorized from '../../assets/logo colorized.png'
import { MostrarModalTermos } from '../modal/modalTermosECondicoes/mostrarModalTermos'

const SignUpForm = () => {
    const handleClickBackButton = () => {
        window.history.back();
    }

    const SignUp = () => {
        alert("Cadastro feito com sucesso!");        
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
                        <MostrarModalTermos/>                                 
                    </label>
                </div>
                <div className={Style.form_btn}>  
                    <ButtonTextComponent type="submit" description="Cadastrar" onClick={SignUp} />
                    <ButtonTextComponent description="Voltar" onClick={handleClickBackButton} />                              
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;
