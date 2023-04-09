import Style from './SignUpComponent.module.css';
import { STATES_BR } from './constants';
import { MostrarModalTermos } from '../modal/modalTermosECondicoes/mostrarModalTermos';
import IUser from '../../interface/IUsers';
import {contaService} from '../../service/contaService';
import logoDark from '../../assets/logo_dark.webp';
import logoColorized from '../../assets/logo_colorized.webp';
import { useState } from 'react';

const Back = () => {
    window.history.back();
};

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
        contaService.criar(user);
        
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
                    <div className={Style.form_group}>
                        <input
                            name="name"
                            className={Style.input}
                            type="text"                           
                            pattern="[A-Za-zÀ-ú\s]+" 
                            required 
                        />
                        <label className={Style.input_label} htmlFor="name">
                            Nome
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="last_name"
                            className={Style.input}
                            type="text"
                            pattern="[A-Za-zÀ-ú\s]+"
                            required
                        />
                        <label
                            className={Style.input_label}
                            htmlFor="last_name"
                        >
                            Sobrenome
                        </label>
                    </div>
                    <div className={Style.form_group}>                        
                        <input
                            name="cpf"
                            className={Style.input}
                            type="text"
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                            value={cpf}
                            onChange={handleCpfChange}
                            required
                        />
                        
                        <label className={Style.input_label} htmlFor="cpf">
                            Cpf
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="email"
                            className={Style.input}
                            type="text"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                        />
                        <label className={Style.input_label} htmlFor="email">
                            E-mail
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="password"
                            className={Style.input}
                            type="password"
                            required
                        />
                        <label className={Style.input_label} htmlFor="password">
                            Senha
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="confirm_password"
                            className={Style.input}
                            type="password"
                            required
                        />
                        <label
                            className={Style.input_label}
                            htmlFor="confirm_password"
                        >
                            Confirmar senha
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="date_of_birth"
                            className={Style.input}
                            type="date"
                            pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/((19|20)\d{2})"
                            required
                        />
                        <label
                            className={Style.input_label}
                            htmlFor="date_of_birth"
                        >
                            Data de nascimento
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="cep"
                            className={Style.input}
                            type="text"
                            pattern="[0-9]{8}"
                            required
                        />
                        <label className={Style.input_label} htmlFor="cep">
                            CEP
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="street"
                            className={Style.input}
                            type="text"
                            required
                        />
                        <label className={Style.input_label} htmlFor="street">
                            Rua
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="number"
                            className={Style.input}
                            type="text"
                            pattern="[A-Za-z0-9]+[A-Za-z0-9\s]*"
                            required
                        />
                        <label className={Style.input_label} htmlFor="number">
                            Número
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="complement"
                            className={Style.input}
                            type="text"
                            required
                        />
                        <label
                            className={Style.input_label}
                            htmlFor="complement"
                        >
                            Complemento
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="neighborhood"
                            className={Style.input}
                            type="text"
                            required
                        />
                        <label
                            className={Style.input_label}
                            htmlFor="neighborhood"
                        >
                            Bairro
                        </label>
                    </div>
                    <div className={Style.form_group}>
                        <input
                            name="city"
                            className={Style.input}
                            type="text"
                            required
                        />
                        <label className={Style.input_label} htmlFor="city">
                            Cidade
                        </label>
                    </div>
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
                    <button className={Style.btn_sign_up} type="submit">
                        Criar conta
                    </button>
                    <button className={Style.btn_sign_up} onClick={Back}>
                        Voltar
                    </button>
                </div>
            </form>
        </div>
    );
};


export default SignUpForm;
