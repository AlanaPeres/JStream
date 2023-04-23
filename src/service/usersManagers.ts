import IUser from "../interface/IUsers"
import { Api } from "./api";

export class UsersManager {
    createUser (user: IUser) {
        const usersStorage: IUser[] =  JSON.parse(localStorage.getItem('usuarios') || '[]');
        localStorage.setItem('usuarios', JSON.stringify([...usersStorage, user]));
    }

    findUser (cpf: string): IUser {
        const usersStorage: IUser[] =  JSON.parse(localStorage.getItem('usuarios') || '[]');
        const user = usersStorage.find(user => user.cpf === cpf);
        if (!user) throw 'Usuário não encontrado';
        return user
    }

    getSessionUser () {
        console.log('getSessionUser >>>', localStorage.getItem('usuario'))
        const user = localStorage.getItem('usuario');
        if (!user) return null
        return JSON.parse(localStorage.getItem('usuario') || '');
    }

    authenticate (cpf: string, senha: string) {
        const _user = this.findUser(cpf);
        if (_user.senha !== senha) {
            throw 'Senha incorreta';
        }

        localStorage.setItem('usuario', JSON.stringify(_user));
        return _user;
    }

    authenticateJwt(){
        const token = localStorage.getItem('token');
        if(token === null){
           const host = window.location.host;
            window.location.href = `http://${host}/login`;
            return;
       }

       Api().get('autorizacao', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    logOut () {
        localStorage.removeItem('usuario');
    }
}