import Style from './SignUpComponent.module.css';
import { STATES_BR } from './constants';
import { MostrarModalTermos } from '../modal/modalTermosECondicoes/mostrarModalTermos';
import IUser from '../../interface/IUsers';
import logoDark from '../../assets/logo_dark.webp';
import logoColorized from '../../assets/logo_colorized.webp';
import { useState } from 'react';
import { InputTextComponent } from '../InputComponent/InputComponent';
import {ButtonTextComponent} from '../ButtonComponent/ButtonComponent';
import { Link } from 'react-router-dom';
import { UsersManager } from '../../service/usersManagers';



const SignUpForm = () => {
    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        let user: IUser = {
            nome: event.target[0].value,
            sobrenome: event.target[1].value,
            cpf: event.target[2].value,
            email: event.target[3].value,
            senha: event.target[4].value,
            confirmarSenha: event.target[5].value,
            nascimento: event.target[6].value,
            cep: event.target[7].value,
            rua: event.target[8].value,
            numero: event.target[9].value,
            complemento: event.target[10].value,
            bairro: event.target[11].value,
            cidade: event.target[12].value,
            estado: event.target[13].value,
            saldoAtual: 4000
        };
        const users = new UsersManager();
        users.createUser(user);
        window.location.href = 'http://localhost:3000/login'
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
        <div className={Style.sign_up}>
            <div>
                <img
                    className={Style.logo_dark}
                    src={logoDark}
                    alt="Imagem da logo"
                />
                <img
                    className={Style.logo_colorized}
                    src={logoColorized}
                    alt="Imagem da logo"
                />
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className={Style.form_content}>
                <InputTextComponent name="name" type="text" label="Nome" pattern="[A-Za-zÀ-ú\s]+"  />
                <InputTextComponent name="last_name" type="text" label="Sobrenome" pattern="[A-Za-zÀ-ú\s]+"/>
                <InputTextComponent name="cpf" type="text" label="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" onChange={handleCpfChange} value={cpf} />
                <InputTextComponent name="email" type="email" label="E-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <InputTextComponent name="password" type="password" label="Senha" />
                <InputTextComponent name="confirm_password" type="password" label="Confirmar senha" />
                <InputTextComponent name="date_of_birth" type="date" label="Data de nascimento" pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/((19|20)\d{2})" />
                <InputTextComponent name="cep" type="text" label="CEP" pattern="[0-9]{8}" />
                <InputTextComponent name="street" type="text" label="Rua" />
                <InputTextComponent name="number" type="text" label="Número" pattern="[A-Za-z0-9]+[A-Za-z0-9\s]*" />
                <InputTextComponent name="complement" type="text" label="Complemento" />
                <InputTextComponent name="neighborhood" type="text" label="Bairro" />
                <InputTextComponent name="city" type="text" label="Cidade" />
                <div className={Style.form_group}>
                    <select className={Style.group_uf} name="uf">
                        {STATES_BR.map(({ id, value, text }) => (
                            <option key={id} value={value}>
                                {text}
                            </option>
                        ))}
                    </select>
                </div>
                </div>
                <div className={Style.terms_conditions_group}>
                    <input
                        className={Style.checkbox_input}
                        name="terms_conditions_label"
                        type="checkbox"
                        required
                    />
                    <label
                        className={Style.terms_conditions_label}
                        htmlFor="terms_conditions_label"
                    >
                        <MostrarModalTermos />
                    </label>
                </div>
                <div className={Style.form_btn}>
                    <ButtonTextComponent type='submit' description='Cadastrar' />
                    <Link to="/">
                        <ButtonTextComponent description='Voltar' />                                    
                    </Link>
                </div>
            </form>
        </div>
    );
};


export default SignUpForm;
