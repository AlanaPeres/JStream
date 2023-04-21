import { Link } from 'react-router-dom';
import logo from '../../assets/logo_colorized.webp';
import logo_dark from '../../assets/logo_dark.webp';
import styles from './LoginComponent.module.css';
import { MostrarModal } from '../modal/modalRecuperarSenha/mostrarModal';
import { InputTextComponent } from '../InputComponent/InputComponent';
import {ButtonTextComponent} from '../ButtonComponent/ButtonComponent';
import { UsersManager } from '../../service/usersManagers';
import { useState } from 'react';


export const LoginComponent = () => {
    const [loginError, setLoginError] = useState(false);
    
    const handleLoginForm = (e: any) => {
        e.preventDefault();
        
        const cpf = e.target[0].value;
        const senha = e.target[1].value;
        const _user = new UsersManager();

        try {
            _user.authenticate(cpf, senha);
            const host = window.location.host;
            window.location.href = `http://${host}/saldo`;
        } catch (err) {
            setLoginError(true);
        }
    };

    
    const [cpf, setCpf] = useState(""); 
    const formatCpf = (value: string) => {
      // Remove qualquer caractere que não seja dígito numérico
      const cleanedValue = value.replace(/\D/g, "");
  
      // Adiciona pontos e hífens em posições específicas do valor limpo
      let formattedValue = cleanedValue;
      if (cleanedValue.length > 3) {
        formattedValue =
          cleanedValue.substr(0, 3) +
          "." +
          cleanedValue.substr(3, 3) +
          "." +
          cleanedValue.substr(6, 3);
      }
      if (cleanedValue.length > 9) {
        formattedValue += "-" + cleanedValue.substr(9, 2);
      }
  
      return formattedValue;
    };

    
    const handleCpfChange = (event: { target: { value: any; }; }) => {
        // Obtém o valor atualizado do campo de CPF
        const newValue = event.target.value;
    
        // Formata o valor e atualiza o estado do componente
        const formattedValue = formatCpf(newValue);
        setCpf(formattedValue);
      };

    return (
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
                    <InputTextComponent name="cpf" type="text" label="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" onChange={handleCpfChange} value={cpf} />
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
                        {loginError && (
                            <div className={styles.message}>
                                <p>Senha ou login incorretos</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};
