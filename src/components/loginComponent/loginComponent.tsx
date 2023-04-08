import { Link } from 'react-router-dom';
import login_image from '../../assets/login_image.png';
import logo from '../../assets/logo colorized.png';
import logo_dark from '../../assets/logo dark.png';
import styles from './loginComponent.module.css';
import { MostrarModal } from '../modal/modalRecuperarSenha/mostrarModal';
import contaService from '../../service/contaService';

export const LoginComponent = () => {
    const handleLoginForm = (e: any) => {
        e.preventDefault();
        let user: any = {
            cpf: e.target[0].value,
            senha: e.target[1].value,
        };
        contaService.getUsers()
        const isSuccessLogin = contaService.validateUserByCpf(user.cpf, user.senha);
        
        if (isSuccessLogin) {
            
        }
    };

    function paginaAtual(props: any) {
        const handlePage = () => {
            props.history.push('/saldo');
        }
    }
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
                            <div>
                                <input
                                    className={styles.input}
                                    type="number"
                                    placeholder="CPF"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    className={styles.input}
                                    type="password"
                                    placeholder="SENHA"
                                    required
                                />
                            </div>
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
                                <button className={styles.btn}>Entrar</button>
                                <Link to="/">
                                    <button className={styles.btn}>
                                        Voltar
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
