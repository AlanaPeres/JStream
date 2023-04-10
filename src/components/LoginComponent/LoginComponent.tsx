import { Link } from 'react-router-dom';
import logo from '../../assets/logo_colorized.webp';
import logo_dark from '../../assets/logo_dark.webp';
import styles from './LoginComponent.module.css';
import { MostrarModal } from '../modal/modalRecuperarSenha/mostrarModal';
import { InputTextComponent } from '../InputComponent/InputComponent';
import {ButtonTextComponent} from '../ButtonComponent/ButtonComponent';
import { UsersManager } from '../../service/usersManagers';


export const LoginComponent = () => {
    const handleLoginForm = (e: any) => {
        e.preventDefault();
        
        const cpf = e.target[0].value;
        const senha = e.target[1].value;
        const _user = new UsersManager();
        try {
            _user.authenticate(cpf, senha);
            window.location.href = 'http://localhost:3000/saldo'
        } catch (err) {
            console.error(err)
        }
    };
    return (
        <>
            <div className={styles.main}>
                <div className={styles.form_content}>
                    <div className={styles.img_container}>
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
                    </div>
                    <div>
                        <form onSubmit={handleLoginForm}>
                            <InputTextComponent name="cpf" type="text" label="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" />
                            <InputTextComponent name="password" type="password" label="Senha" />
                            <div className={styles.pass_check}>
                                <div className={styles.input_checkbox}>
                                    <input
                                    className={styles.checkbox_lembrar_senha}
                                        type="checkbox"
                                        id="lembrar_senha"
                                    />
                                    <label htmlFor="lembrar_senha">
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
