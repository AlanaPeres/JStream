import Style from './SignUpComponent.module.css';
import { STATES_BR } from './constants';
import logoDark from '../../assets/logo dark.png';
import logoColorized from '../../assets/logo colorized.png';
import { MostrarModalTermos } from '../modal/modalTermosECondicoes/mostrarModalTermos';
import IUser from '../../interface/IUsers';
import contaService from '../../service/contaService';

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
        };
        contaService.criar(user);
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
