import { Link } from 'react-router-dom';
import login_image from '../../assets/login_image.png';
import logo from '../../assets/logo colorized.png';
import logo_dark from '../../assets/logo dark.png';
import Style from './loginComponent.module.css';

export const LoginComponent = () => {
    return (
        <>
            <div className={Style.main}>
                <div className={Style.img}>
                    <img
                        src={login_image}
                        width={'761'}
                        alt="Mulher ao lado de uma pilha de moeda"
                    />
                </div>
                <div className={Style.form_content}>
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
                    <div>
                        <form>
                            <div>
                                <input
                                    className={Style.input}
                                    type="number"
                                    placeholder="CPF"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    className={Style.input}
                                    type="password"
                                    placeholder="SENHA"
                                    required
                                />
                            </div>
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
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
