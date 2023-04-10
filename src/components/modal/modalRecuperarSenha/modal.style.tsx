import styled from 'styled-components';

// estilo btn login "esqueci a senha"
export const BtnEsqueciSenha = styled.button`
    all: unset;
    cursor: pointer;
`; 

// estilos do modal 
export const Titulo = styled.h3`
	display: flex;
	justify-content: center;
	align-items: center;	

    letter-spacing: 3px;
    font-size: 25px

`;

export const ContainerBtnFechar = styled.div`
    display: flex;
    justify-content: right;
    padding: 10px; 
`;

export const BtnFechar = styled.button`
    all: unset;
    cursor: pointer;	
    margin-right: 10px; 
    font-size: 1.25rem;
`;

export const Formulario = styled.form`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
`;

export const ContainerInputModal = styled.div`
    position: relative;

    label {
    position: absolute;
    top: 80%;
    left: 5px;
    transform: translateY(-90%);
    pointer-events: none;
    transition: .5s;
    padding: 5px 5px 5px 15px;
    }

    input {
    width: 260px;
    height: 40px;
    outline: none;
    border-radius: 30px;
    border-style: none;
    background-color: #80cbc4;
    padding: 10px;
    }

    input:focus ~ label,
    input:valid ~ label,
    &.filled label {
    top: 0;
    font-size: 0.85rem;
    background-color: transparent;
    color: black;
    }
`;


export const BtnEnviarEmail = styled.button`
    all: unset;
    margin-top: 10px;
    width: 230px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.938rem;
   
    border-radius: 30px;
    background-color: #263339;
    color: aliceblue;
    cursor: pointer;
`;
