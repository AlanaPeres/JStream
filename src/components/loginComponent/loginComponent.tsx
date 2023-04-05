import { Link } from 'react-router-dom';
import logo from '../../assets/logo colorized.png';
import logo_dark from '../../assets/logo dark.png';
import Style from './loginComponent.module.css';
import { InputTextComponent } from '../InputComponent/inputComponent';
import { ButtonTextComponent } from '../ButtonComponent/ButtonComponent';

export const LoginComponent = () => {
    const handleClickBackButton = () => {
        window.history.back();
    }
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
                            className={Style.checkbox_lembrar_senha}
                            type="checkbox"
                            id="lembrar_senha"
                            required
                        />
                        <label className="lembrar_senha" htmlFor="lembrar_senha">
                            Lembrar senha
                        </label>
                    </div>
                    <div>
                        <Link className={Style.esqueci_senha} to={''}>Esqueci minha senha</Link>
                    </div>
                </div>
                <div className={Style.btns}>  
                <Link to="/">
                    <ButtonTextComponent type='submit' description="Entrar" />
                </Link>
                <Link to="/">
                    <ButtonTextComponent description="Voltar" />
                </Link>
                </div>
        
            </div>
        </div>
    );
};
