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
	width: 340px;    
	max-width: 80%;
	padding: 1.5rem;
	border-radius: 2rem;
    
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
  border-radius: 2rem;
  box-sizing: border-box;
	
`;

export const Texto = styled.div`
@media (max-width: 768px) {
    position: relative;
    background: #263339; 
    padding: 1.5rem;
    height:258px;
    border-radius: 2rem;
}
position: fixed;

  background: #263339;
  z-index: 10;
  width: 406px;
  height:481.08px;
  max-width: 90%;
  padding: 1.5rem;
  border-radius: 2rem;
  box-sizing: border-box;
`;

export const Buttons = styled.footer`
	padding: 1rem;	
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InputSenha = styled.input`

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
    border-radius: 2rem;
    }

`
export const BtnVoltar = styled.button`
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

export const BtnConfirmar = styled.button`
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
`

