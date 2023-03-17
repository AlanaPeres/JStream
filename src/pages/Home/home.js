const acessBtn = document.getElementById('button-acess-account');

acessBtn.addEventListener('click', () => {
    const acessPage = '../Login/login.html';

    window.location.href = acessPage;
});

const createBtn = document.getElementById('button-create-account');

createBtn.addEventListener('click', () => {
    const createPage = '../Cadastro/cadastro.html'; /*insserir caminho da página de criação*/

    window.location.href = createPage;
});
