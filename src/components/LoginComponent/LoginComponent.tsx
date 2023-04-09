import { Link } from 'react-router-dom';
import logo from '../../assets/logo_colorized.webp';
import logo_dark from '../../assets/logo_dark.webp';
import styles from './LoginComponent.module.css';
import { MostrarModal } from '../modal/modalRecuperarSenha/mostrarModal';
import {contaService} from '../../service/contaService';
import { InputTextComponent } from '../InputComponent/InputComponent';
import {ButtonTextComponent} from '../ButtonComponent/ButtonComponent';

export const LoginComponent = () => {
    const handleLoginForm = (e: any) => {
        e.preventDefault();

        let user: any = {
            cpf: e.target[0].value,
            senha: e.target[1].value,
        };
        const isSuccessLogin = contaService.validateUserByCpf(
            user.cpf,
            user.senha
            
        );
        if (isSuccessLogin) {
            user = contaService.getUserLogged('usuario');           
            window.location.href = 'http://localhost:3000/saldo'
        }
    };
    return (
        <>
            <div className={styles.main}>
                <div className={styles.form_content}>
                    <img
                        className={styles.normal_logo}
                        src={logo}
                        alt=""
                        width="100"
                    />
                    <img
                        className={styles.dark_logo}
                        src={logo_dark}
                        alt=""
                        width="100"
                    />
                    <div>
                        <form onSubmit={handleLoginForm}>
                            <InputTextComponent name="cpf" type="number" label="CPF" pattern=''/>
                            <InputTextComponent name="password" type="password" label="Senha" pattern=''/>
                            <div className={styles.pass_check}>
                                <div className={styles.input_checkbox}>
                                    <input
                                        type="checkbox"
                                        id="lemebrar_senha"
                                    />
                                    <label htmlFor="lemebrar_senha">
                                        Lembrar senha
                                    </label>
                                </div>
                                <div className={styles.esqueci_senha}>
                                    <MostrarModal />
                                </div>
                            </div>
                            <div className={styles.btns}>
                                <ButtonTextComponent type='submit' description='Entrar' />
                                <Link to="/">
                                    <ButtonTextComponent type='submit' description='Voltar' />                                    
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
