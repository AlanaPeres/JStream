import IUser from '../interface/IUsers';

let users: IUser[] = [];
const contaService = {
    criar: function (user: any) {
        users.push(user);
    },

    getUsers: function () {
        console.log(users);
    },

    validateUserByCpf: function (cpf: string, senha: string) {
        let currentUser: any;

        currentUser = users.find((x) => x.cpf === cpf);
        if (!currentUser) {
          alert('CPF não encontrado');
          return false;
        }
        
        if (currentUser.senha !== senha) {
          alert('Senha invalida');
          return false;
        }

        return true;
    },
};

export default contaService;
