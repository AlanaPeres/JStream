import styled from 'styled-components';

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


