import style from "../transferenciaComponent.module.css";
import { MostrarModalDeposito } from "../../modal/modalDeposito/mostrarModal";
import axios from "axios";
import { useState } from "react";
import { UsersManager } from "../../../service/usersManagers";
import IUser from "../../../interface/IUsers";

export const FormDeposito = () => {

    const usersManagers = new UsersManager();
    const user: IUser = usersManagers.getSessionUser();
  

    const [valordepo, setValorDepo] = useState('');

  const handleChange = (event: any) => {
    setValorDepo(event.target.value);
  }

    const submitDeposit = (event: any) => {
        event.preventDefault();
      
        const transaction = {
          cpf: `${user.cpf}`,
          id: 0,
          cpfDestino: `stringstrin`,
          valor: valordepo,
          dataHora: '2023-04-24T11:33:41.052Z',
          tipoTransacao: 'U'
        };
      
        axios.post(`https://localhost:7079/api/Transacoes?cpf=${user.cpf}`, transaction)
        .then(response => {
          console.log(response.data); // faça algo com a resposta da API
        })
        .catch(error => {
          console.error(error);
        });
      }

  return (
    <form className={style.form} onSubmit={submitDeposit}>
      <div className={style.col_3}>
        <div className={style.container_input_label}>
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9.,]+"
            autoComplete="off"
            required
            placeholder="Valor"
            value={valordepo}
            onChange={handleChange}
          ></input>
          <label></label>
        </div>
      </div>
      <div className={style.container_btn}>
        <MostrarModalDeposito />
      </div>
    </form>
  );
};
