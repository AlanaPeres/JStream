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
import { Loading } from "../Loading/Loading";
import { Api } from "../../service/api";
import axios from 'axios';

const APP_DOMAIN = 'http://localhost:3000';

const createPayload = (target: any[]): IUser => {
    return {
        nome: target[0].value,
        cpf: target[2].value,
        email: target[3].value,
        senha: target[4].value,
        dataNascimento: target[6].value,
        cep: target[7].value,
        rua: target[8].value,
        numero: target[9].value,
        complemento: target[10].value,
        bairro: target[11].value,
        cidade: target[12].value,
        estado: target[13].value,
    }
}

const SignUpForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [cpf, setCpf] = useState(""); 

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        const user: IUser = createPayload(event.target);

        setIsLoading(true);
        Api().post(`/clientes`, user).then(() => {
            window.location.href = `${APP_DOMAIN}/login`;
        }).catch((err) => {
            console.error('Ocorreu um erro na request', err);
        }).finally(() => {
            setIsLoading(false);
        })
    };

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

    function checkPasswordsMatch() {
        const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement;
        const confirmPasswordInput = document.querySelector('input[name="confirm_password"]') as HTMLInputElement;
      
        if (passwordInput.value !== confirmPasswordInput.value) {
            let pswdconfirm = document.querySelector('input[name=confirm_password]') as HTMLInputElement;
            let label2 = document.querySelector('label[for=confirm_password]') as HTMLLabelElement;
            pswdconfirm.style.border = "1px solid red";
            label2.innerText = "Senha incompatível";
        }
        else{
            let pswdconfirm = document.querySelector('input[name=confirm_password]') as HTMLInputElement;
            let label2 = document.querySelector('label[for=confirm_password]') as HTMLLabelElement;
            pswdconfirm.style.border = "";
            label2.innerText = "Confirmar Senha";
    
        }
      }
    
    
    
    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    
    const handleCepChange = async (event: React.FocusEvent<HTMLInputElement>) => {
      const cep = event.target.value;
      if (cep.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          const data = response.data;
          setCep(cep);
          setStreet(data.logradouro);
          setNumber("");
          setComplement(data.complemento);
          setNeighborhood(data.bairro);
          setCity(data.localidade);
          setState(data.uf);
        } catch (error) {
          console.error(error);
        }
      } else {
        // limpa os dados caso o cep não tenha 8 dígitos
        setCep("");
        setStreet("");
        setNumber("");
        setComplement("");
        setNeighborhood("");
        setCity("");
        setState("");
      }}


   
    return (
      <div className={Style.sign_up}>
        {isLoading && <Loading />}
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
            <InputTextComponent name="confirm_password" type="password" label="Confirmar senha" onChange={checkPasswordsMatch} />
            <InputTextComponent name="date_of_birth" type="date" label="Data de nascimento" pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/((19|20)\d{2})" />
            <InputTextComponent name="cep" type="text" label="CEP" pattern="[0-9]{8}" onChange={handleCepChange} />
            <InputTextComponent name="street" type="text" label="Rua" value={street} />
            <InputTextComponent name="number" type="text" label="Número" pattern="[A-Za-z0-9]+[A-Za-z0-9\s]*" />
            <InputTextComponent name="complement" type="text" label="Complemento" />
            <InputTextComponent name="neighborhood" type="text" label="Bairro" value={neighborhood} />
            <InputTextComponent name="city" type="text" label="Cidade" value={city} />
            <div className={Style.form_group}>
                <select className={Style.group_uf} name="uf" value={state}>
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
