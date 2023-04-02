import { Link } from 'react-router-dom';
import login_image from '../../assets/login_image.png';
import logo from '../../assets/logo colorized.png';
import styles from './loginComponent.module.css';

export const LoginComponent = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.img}>
                    <img
                        src={login_image}
                        width={'761'}
                        alt="Mulher ao lado de uma pilha de moeda"
                    />
                </div>
                <div className={styles.form_content}>
                    <img src={logo} alt="" width="100" />
                    <div>
                        <form>
                            <div>
                                <input
                                    className={styles.input}
                                    type="number"
                                    placeholder='CPF'
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    className={styles.input}
                                    type="password"
                                    placeholder='SENHA'
                                    required
                                />
                            </div>
                            <div className={styles.pass_check}>
                                <div className={styles.input_checkbox}>
                                    <input type="checkbox" required />
                                    Lembrar senha
                                </div>
                                <div className={styles.esqueci_senha}>
                                    <Link to={''}>Esqueci minha senha</Link>
                                </div>
                            </div>
                            <div className={styles.btns}>
                                <button className={styles.btn}>Entrar</button>
                                <button className={styles.btn}>Voltar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
