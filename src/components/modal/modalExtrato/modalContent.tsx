import React, { useEffect, useState } from 'react';
import { CardTransacoes } from './modalCardTransacoes';
import { Backdrop, BtnVoltar, ExtratoContainer, ExtratoHeader, Transacoes } from './modal.style';

interface Transacao {
    tipo: string;
    data: string;
    description: string;
    valor: number;
    saldo: number;
}

// async function fetchTransacoes(): Promise<Transacao[]> {
//     // Caminho usado localmente para teste
//     let response = await fetch('http://localhost:5173/api/transacoes.json');
//     let data = await response.json();
//     return data;
// }

export const ContentExtrato = () => {
    // const [transacoes, setTansacoes] = useState<Transacao[]>([]);
    const [transacoes, setTansacoes] = useState<Transacao[]>([
        {
            tipo: 'Cartão',
            data: '20/06/2022',
            description: 'Padaria',
            valor: 50,
            saldo: 450
        },
        {
            tipo: 'Cartão',
            data: '20/06/2022',
            description: 'Padaria',
            valor: 50,
            saldo: 450
        },
        {
            tipo: 'Cartão',
            data: '20/06/2022',
            description: 'Padaria',
            valor: 50,
            saldo: 450
        },
        {
            tipo: 'Cartão',
            data: '20/06/2022',
            description: 'Padaria',
            valor: 50,
            saldo: 450
        },
        {
            tipo: 'Cartão',
            data: '20/06/2022',
            description: 'Padaria',
            valor: 50,
            saldo: 450
        },
        {
            tipo: 'Cartão',
            data: '20/06/2022',
            description: 'Padaria',
            valor: 50,
            saldo: 450
        }
    ]);

    useEffect(() => {
        async function getTransacoes() {
            setTansacoes(transacoes);
        }
        getTransacoes();
    }, []);
    // useEffect(() => {
    //     async function getTransacoes() {
    //         const data = await fetchTransacoes();
    //         setTansacoes(data /*['transacoes']*/);
    //     }
    //     getTransacoes();
    // }, []);

    const [isModalVisible, setIsModalVisible] = useState(true);

    const fecharModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            {isModalVisible && (
                <Backdrop onClick={fecharModal}>
                    <ExtratoContainer>
                        <ExtratoHeader>
                            <div className="mes">ABR/23</div>
                            <div className="totalSaldo">R$445,00</div>
                        </ExtratoHeader>
                        <Transacoes>
                            {transacoes.map(transacao => (
                                <CardTransacoes tipo={transacao.tipo} data={transacao.data} description={transacao.description} valor={transacao.valor} saldo={transacao.saldo} />
                            ))}
                        </Transacoes>
                        <BtnVoltar type="button" onClick={fecharModal}>
                            Voltar
                        </BtnVoltar>
                    </ExtratoContainer>
                </Backdrop>
            )}
        </>
    );
};
