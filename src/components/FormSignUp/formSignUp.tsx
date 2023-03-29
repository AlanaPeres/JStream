import './formSignUp.css'
import logo from '../../assets/logo_dark.png'

const FormSignUp = () => {
    return (
        <div className="container">
        <img src={logo} alt="Imagem da logo" />
            <form className='form'> 
                <input className='form_name' type="text" placeholder='Nome' />
                <input className='form_last-name' type="text" placeholder='Sobrenome' />
                <input className='form_cpf' type="text" placeholder='CPF' />
                <input className='form_email' type="email" placeholder='E-mail' />
                <input className='form_password' type="password" placeholder='Senha' />
                <input className='form_corfirm-password' type="password" placeholder='Confirmar senha' />
                <input className='form_date-of-birth' type="date" placeholder='Data de nascimento' />
                <input className='form_cep' type="text" placeholder='CEP' />
                <input className='form_street' type="text" placeholder='Rua' />
                <input className='form_number' type="text" placeholder='Número' />
                <input className='form_complement' type="text" placeholder='Complemento' />
                <input className='form_neighborhood' type="text" placeholder='Bairro' />
                <input className='form_city' type="text" placeholder='Cidade' />
                <input className='form_uf' type="text" placeholder='UF' />
                <input className='form_checkbox' type="checkbox" />
                <button className='form_sign-up' type="submit">Criar conta</button>
                <label>
                    Li e concordo com os <a href="#">termos e condições</a>.
                </label>
                </form>
            </div>
    );
}

export default FormSignUp;