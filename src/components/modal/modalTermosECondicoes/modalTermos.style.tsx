import styled from 'styled-components';

export const Scroll = styled.div`
  overflow-y: scroll;
  max-height: 300px;
  
  margin-bottom: 20px;
  padding-right: 10px; /* adiciona espaço para a barra de rolagem */
  ::-webkit-scrollbar {
	width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #E0F2F1;
  }
  ::-webkit-scrollbar-thumb {
    background: #263339;
	height: 30px;
    border-radius: 5px;
  }
`;

export const ModalContainer = styled.div`
@media (max-width: 375px) {
    /* Estilos para smartphones */
	font-family:"roboto", sans-serif;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: #E0F2F1;
	z-index: 10;
	width: 350px;
	max-width: 80%;
	padding: 1.5rem;
	border-radius: 4.5rem;
  }
  font-family:"roboto", sans-serif;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #E0F2F1;
  z-index: 10;
  width: 600px;
  max-width: 90%;
  padding: 1.5rem;
  border-radius: 4.5rem;
	
`;

export const Titulo = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;	
`;

export const Texto = styled.p`
	text-align: justify;
	margin: 15px;
`;
export const Footer = styled.footer`
	padding: 1rem;	
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Confirmar = styled.button`
	border: none;
	border-radius: 2.5rem;
	min-width: 150px;
	outline: none;
	padding: 6px 10px;
	background: #263339;
	color: #f9f9f9;
	cursor: pointer;  
`;