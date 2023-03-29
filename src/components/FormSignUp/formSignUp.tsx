import './formSignUp.css'
import logo from '../../assets/logo_dark.png'

const FormSignUp = () => {
    return (
        <div className="container">
        <img src={logo} alt="Imagem da logo" />
            <form className='form'> 
                <div className='form_group'>
                    <input className='group_name' type="text" required/>
                    <span className=''>Nome</span>
                </div>
                <div className='form_group'>
                    <input className='group_last-name' type="text" required/>
                    <span>Sobrenome</span>
                </div>
                <div className='form_group'>
                    <input className='group_password' type="password" required/>
                    <span>Senha</span>
                </div>
                <div className='form_group'>
                    <input className='group_confirm-password' type="password" required/>
                    <span>Confirmar senha</span>
                </div>
                <div className='form_group'>
                    <input className='group_date-of-birth' type="date" required/>
                    <span>Data de nascimento</span>
                </div>
                <div className='form_group'>
                    <input className='group_cep' type="text" required/>
                    <span>CEP</span>
                </div>
                <div className='form_group'>
                    <input className='group_street' type="text" required/>
                    <span>Rua</span>
                </div>
                <div className='form_group'>
                    <input className='group_number' type="text" required/>
                    <span>Número</span>
                </div>
                <div className='form_group'>
                    <input className='group_complement' type="text" required/>
                    <span>Complemento</span>
                </div>
                <div className='form_group'>
                    <input className='group_neighborhood' type="text" required/>
                    <span>Bairro</span>
                </div>
                <div className='form_group'>
                    <input className='group_city' type="text" required/>
                    <span>Cidade</span>
                </div>
                <div>
                    <select className='' name="uf">
                        <option selected>UF</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espirito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>
                <div className='form_group'>
                    <input className='group_checkbox' type="checkbox" required/>
                    <label>
                        Li e concordo com os <a href="#">termos e condições</a>.
                    </label>
                </div>
                <div className='form_btn'>
                    <a href="#">
                        <button className='form_sign-up' type="submit">Criar conta</button>
                    </a>
                </div>
            </form>
            </div>
    );
}

export default FormSignUp;