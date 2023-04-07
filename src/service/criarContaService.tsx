import IUser from "../interface/IUsers";

const criarContaService = () => {
  const newUser: IUser = {
    nome: 'alana',
    sobrenome: 'peres',
    cpf: '1111111111',
    email: 'alana@gmail.com',
    senha: '123',
    confirmarSenha: '123',
    nascimento: '23/02/1995',
    cep: '88495-000',
    rua: 'mil e um',
    numero: '0',
    complemento: 'sn',
    bairro: 'centro',
    cidade: 'Garopab',
    estado: 'SC',
  }

};



export default criarContaService;






























/*function Signup() {
    
    const [formData, setFormData] = useState<User>({ name: "", email: "" });
  
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
      event.preventDefault();
      
        const newUser: User = {

        nome: formData.name,
        sobrenome: formData.last_name,
        cpf: formData.cpf,
        email: formData.email,
        senha: formData.password,
        confirmarSenha: formData.confirm_password,
        nascimento: formData.date_of_birth,
        cep: formData.cep,
        rua: formData.street,
        numero: formData.number,
        complemento: formData.complement,
        bairro: formData.neighborhood,
        cidade: formData.city,
        estado: formData.uf,

      };
  
      const newUserJson = JSON.stringify(newUser);
  
      localStorage.setItem(`user_${newUser.email}`, newUserJson);
      
    };

}

function useState<T>(arg0: { name: string; email: string; }): [any, any] {
    throw new Error("Function not implemented.");
}
*/
