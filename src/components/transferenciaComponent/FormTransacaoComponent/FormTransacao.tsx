import style from '../transferenciaComponent.module.css';
import { MostrarModalTransferencia } from '../../modal/modalTransferencia/mostrarModal';
import { UsersManager } from '../../../service/usersManagers';
import IUser from '../../../interface/IUsers';
import axios from 'axios';
import { useState } from 'react';

export const FormTransacao = () => {

    const usersManagers = new UsersManager();
    const user: IUser = usersManagers.getSessionUser();
  

    const [cpftrans, setCpf] = useState('');
    const [valortrans, setValortrans] = useState('');

  const handleCpf = (event: any) => {
    setCpf(event.target.value);
  }
const handleTransf = (event: any) => {
    setValortrans(event.target.value);
  }

    const submitDeposit = (event: any) => {
       event.preventDefault();
      
       const transaction = {
         cpf: `${user.cpf}`,
         id: 0,
       cpfDestino: `${cpftrans}`,
        valor: `${valortrans}`,
        dataHora: '2023-04-24T11:33:41.052Z',
        tipoTransacao: 'p'
      };
      
         axios.post(`https://localhost:7079/api/Transacoes/${user.cpf}?cpfDestino=${cpftrans}`, transaction)
         .then(response => {
           console.log(response.data); // faça algo com a resposta da API
         })
         .catch(error => {
           console.error(error);
         });
       }


    return (
        <form className={style.form} onSubmit={submitDeposit}>
            <div className={style.col_1}>
                <div className={style.container_input_label}>
                    <input type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"  required autoComplete="off"  value={cpftrans}
                    onChange={handleCpf}  placeholder="CPF"></input>
                    <label></label>
                </div>
            </div>
            <div className={style.col_2}>
                <div className={style.container_input_label}>
                    <input type="number" inputMode="numeric" pattern="[0-9.,]+" autoComplete="off" required placeholder="Valor" value={valortrans}
                    onChange={handleTransf}></input>
                    <label></label>
                </div>
            </div>
            <div className={style.container_btn}>
                {/* <button className={style.btn} type="submit">Próximo</button> */}
                <MostrarModalTransferencia />
            </div>
        </form>
    );
};
