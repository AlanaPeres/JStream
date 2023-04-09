import { type } from "os";

interface IUser{
    nome: string;
    sobrenome: string;
    cpf: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    nascimento:string;
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    saldoAtual: number;
}

type UserState = {
    users : IUser[];
}

type UserActiont = {
    type: string
    user:IUser
}

type DispatchType = (args: UserActiont) => UserActiont;

export default IUser;