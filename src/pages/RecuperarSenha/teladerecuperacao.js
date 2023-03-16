
var cpf = document.getElementById('cpfarea').value;

function mostrartexto() {
    
const codigoEnviado = document.getElementById('codigoenviado');
    codigoEnviado.style.display = 'block';
    codigoEnviado.style.opacity = '0';
    codigoEnviado.style.transition = 'opacity 0.3s ease-in';
    setTimeout(() => {
        codigoEnviado.style.opacity = '1';
    }, 100);
};