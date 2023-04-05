import { Link } from 'react-router-dom';
import logo from '../../assets/logo colorized.png';
import logo_dark from '../../assets/logo dark.png';
import Style from './loginComponent.module.css';
import { InputTextComponent } from '../InputComponent/inputComponent';

export const LoginComponent = () => {
    return (
        <div className={Style.main}>
            <div>
                <img
                    className={Style.normal_logo}
                    src={logo}
                    alt="Imagem da logo"
                    width="100"
                />
                <img
                    className={Style.dark_logo}
                    src={logo_dark}
                    alt="Imagem da logo"
                    width="100"
                />
            </div>
            <div className={Style.form_content}>
                <InputTextComponent 
                    name="cpf" 
                    label="CPF" 
                    type="number" />
                <InputTextComponent 
                    name="password" 
                    label="Senha" 
                    type="password" />
                    
                <div className={Style.pass_check}>
                    <div className={Style.input_checkbox}>
                        <input
                            type="checkbox"
                            id="lemebrar_senha"
                            required
                        />
                        <label htmlFor="lemebrar_senha">
                            Lembrar senha
                        </label>
                    </div>
                    <div className={Style.esqueci_senha}>
                        <Link to={''}>Esqueci minha senha</Link>
                    </div>
                </div>
                <div className={Style.btns}>
                    <button className={Style.btn}>Entrar</button>
                    <Link to="/">
                        <button className={Style.btn}>
                            Voltar
                        </button>
                    </Link>
                </div>
        
            </div>
        </div>
    );
};
