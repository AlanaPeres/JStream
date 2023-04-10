import styled from 'styled-components';

export const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #263339bf;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ExtratoContainer = styled.div`
    @media (max-width: 375px) {
        font-family: 'roboto', sans-serif;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #e0f2f1;
        z-index: 10;
        width: 350px;
        max-width: 80%;
        padding: 1.5rem;
        border-radius: 4.5rem;
    }

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    background-color: #e0f2f1;
    color: #1e1e1e;
    padding: 1rem;
    border-radius: 0.75rem;
    width: 20rem;
    height: 30rem;
`;
export const ExtratoHeader = styled.div`
    color: var(--darkbtn-color);
    font-size: 25px;
    font-weight: bold;
    display: flex;
    margin: 1rem 2rem;
    justify-content: space-between;
`;
export const Transacoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    max-width: 75vw;
    max-height: 70%;
    position: relative;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0.65rem;
    }
    &::-webkit-scrollbar-track {
        background: var(--hoverbotaoclaropraescuro--color);
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--darkbtn-color);
        border-radius: 1rem;
    }
`;
export const BtnVoltar = styled.button`
    width: 7rem;
    height: 3rem;
    margin: 1rem auto 0;
    background-color: var(--darkbtn-color);
    border-radius: 3.12rem;
    cursor: pointer;
    text-transform: uppercase;
    color: var(--backgroundmobile-color);
    font-size: 1rem;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: var(--backgrounddesktop-color);
        color: var(--darkbtn-color);
    }
`;

export const CardContainer = styled.div`
    color: var(--darkbtn-color);
    display: flex;
    align-items: center;
    margin: 0.25rem;
    background-color: var(--hoverbotaoescuropraclaro--color);
    border-radius: 1rem;
    flex-grow: 1;
    /* width: 100%; */
    /* max-height: 50%;  */
    justify-content: space-between;
    font-weight: bold;
`;
export const InfoTransacao = styled.div`
    margin: 0.5rem;
`;

export const TipoTransacao = styled.div``;
export const DataTransacao = styled.div``;
export const Descricao = styled.div``;

export const ResumoConta = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        '.'
        'valor'
        'saldo';
`;
export const ValorTransacao = styled.div`
    font-size: 1.5rem;
    grid-area: valor;
    margin-right: 1rem;
`;

export const SaldoConta = styled.div`
    font-size: 0.85rem;
    grid-area: saldo;
    display: flex;
    justify-content: end;
    margin-right: 1rem;
`;
