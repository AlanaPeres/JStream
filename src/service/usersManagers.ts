import IUser from "../interface/IUsers"

export class UsersManager {
    private usersStorage = JSON.parse(localStorage.getItem('usuarios') || '[]');
    createUser (user: IUser) {
        localStorage.setItem('usuarios', JSON.stringify([user]));
    }
    findUser (cpf: string): IUser {
        console.log('findUser', this.usersStorage)
        const users: IUser[] = this.usersStorage;
        const user = users.find(user => user.cpf === cpf);
        if (!user) throw 'Usuário não encontrado';
        return user
    }
    authenticate (cpf: string, senha: string) {
        const _user = this.findUser(cpf);
        if (_user.senha !== senha) {
            throw 'Senha incorreta';
        }
        return _user;
    }
}