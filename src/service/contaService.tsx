import IUser from '../interface/IUsers';

let users: IUser[] = [];

export const contaService = 
{
  criar: function (user: any) {
    users.push(user);
    /* window.location.href = 'http://localhost:3000/login' */
  },

  getUsers: function () {
    console.log(users);
  },

  validateUserByCpf: function (cpf: string, senha: string) 
  {
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

  currentUser: function(cpf: string) {
    let user: any = users.find(u => u.cpf == cpf);     
    return localStorage.setItem('usuario', JSON.stringify(user))    
  },

  getUserLogged: function(usuario: string): any{
    let userLogged = localStorage.getItem(usuario);                
    if (userLogged) 
    { 
    try
    {
      return JSON.parse(userLogged);
    }
    catch(error)
    {
      console.error(`Erro ao fazer o parse do item ${usuario} da Local Storage:`, error);
      return null;
    }      
  }

}

}



