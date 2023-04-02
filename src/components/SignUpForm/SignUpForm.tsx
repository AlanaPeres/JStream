import * as React from "react"
import './SignUpForm.css'
import { STATES_BR } from './constants'
import logoDark from '../../assets/logo dark.png'
import logoColorized from '../../assets/logo colorized.png'

const SignUpForm = () => {
    return (
        <div className="create-account">
            <div className='img'>
                <img className='img-logo-dark' src={logoDark} alt="Imagem da logo" />
                <img className='img-logo-colorized' src={logoColorized} alt="Imagem da logo" />
            </div>
            <form className='create-account_form'>
                <div className="form_content">
                    <div className='form_group'>
                        <input name="name" className='group_name input' type="text" required/>
                        <label className="input-label" htmlFor="name">Nome</label>
                    </div>
                    <div className='form_group'>
                        <input name="last-name" className='group_last-name input' type="text" required/>
                        <label className="input-label" htmlFor="last-name">Sobrenome</label>
                    </div>
                    <div className='form_group'>
                        <input name="password" className='group_password input' type="password" required/>
                        <label className="input-label" htmlFor="password">Senha</label>
                    </div>
                    <div className='form_group'>
                        <input name="confirm-password" className='group_confirm-password input' type="password" required/>
                        <label className="input-label" htmlFor="confirm-password">Confirmar senha</label>
                    </div>
                    <div className='form_group'>
                        <input name="date-of-birth" className='group_date-of-birth input' type="date" required/>
                        <label className="input-label" htmlFor="date-of-birth">Data de nascimento</label>
                    </div>
                    <div className='form_group'>
                        <input name="cep" className='group_cep input' type="text" required/>
                        <label className="input-label" htmlFor="cep">CEP</label>
                    </div>
                    <div className='form_group'>
                        <input name="street" className='group_street input' type="text" required/>
                        <label className="input-label" htmlFor="street">Rua</label>
                    </div>
                    <div className='form_group'>
                        <input name="number" className='group_number input' type="text" required/>
                        <label className="input-label" htmlFor="number">Número</label>
                    </div>
                    <div className='form_group'>
                        <input name="complement" className='group_complement input' type="text" required/>
                        <label className="input-label" htmlFor="complement">Complemento</label>
                    </div>
                    <div className='form_group'>
                        <input name="neighborhood" className='group_neighborhood input' type="text" required/>
                        <label className="input-label" htmlFor="neighborhood">Bairro</label>
                    </div>
                    <div className='form_group'>
                        <input name="city" className='group_city input' type="text" required/>
                        <label className="input-label" htmlFor="city">Cidade</label>
                    </div>
                    <div className='form_group'>
                        <select className='group_uf' name="uf">
                            <option selected>UF</option>
                            {STATES_BR.map(({ value, text }) => <option value={value}>{text}</option>)}
                        </select>
                    </div>
                </div>
                <div className='form_group terms-conditions-group'>
                    <input name="terms-conditions-label" className='checkbox_input' type="checkbox" required/>
                    <label className="terms-conditions-label" htmlFor="terms-conditions-label" >
                        Li e concordo com os <a href="#">termos e condições</a>.
                    </label>
                </div>
                <div className='form_btn'>               
                    <button className='btn_sign-up' type="submit">Criar conta</button>          
                </div>
            </form>
            </div>
    );
}

export default SignUpForm;
