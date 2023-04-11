import styled from 'styled-components';

export const ModalContainer = styled.div`
@media (max-width: 768px) {
    
	font-family:"roboto", sans-serif;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: #E0F2F1;
	z-index: 10;
	width: 250px;    
	max-width: 70%;
	padding: 1.5rem;
	border-radius: 2rem;
  }
  font-family:"roboto", sans-serif;
  position: fixed;
  left: 58%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #E0F2F1;
  z-index: 10;
  width: 350px;
  max-width: 90%;
  padding: 1.5rem;
  border-radius: 2rem;
  box-sizing: border-box;
`;

export const ContainerTexto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.div`
@media (max-width: 768px){
    height: 99px;
    padding: 5px;

    p{
        font-size: 10px;
        color: white;
        margin: 0 0 5px 10px;
    }
}
  width: 100%;
  border-radius: 15px;
  height: 180px;
  padding: 30px;
  margin-bottom: 10px;
  background-color: #263339;

  p{
    color: white;
    margin-bottom: 5px;
  }
`;

export const Buttons = styled.footer`
	padding: 1rem;	
	display: flex;
	justify-content: center;
	align-items: center;
    flex-direction: column;
`;

export const InputSenha = styled.input`
@media (max-width: 768px){
    width: 190px;
    height: 20px;
    font-size: 10px;
}
    width: 230px;
    height: 35px;
    border-radius: 30px;
    margin: 20px 0 10px 0;
    background-color: #408D86;
    border: none;
    outline: none;
    padding 10px;
    color: white;
    
    text-align: center;

    ::placeholder{
        color: white;
    }
`
export const Btn = styled.button`
@media (max-width: 768px){
    width: 190px;
    height: 20px;
    font-size: 10px;
}
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
    transition: .5s;

    :hover{
        background-color: #408D86;
    }
`;
