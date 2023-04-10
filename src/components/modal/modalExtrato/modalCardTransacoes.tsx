import React from 'react';
import { CardContainer, DataTransacao, Descricao, InfoTransacao, ResumoConta, SaldoConta, TipoTransacao, ValorTransacao } from './modal.style';
import './modal.style.tsx';

export const CardTransacoes = (props: { tipo: string; data: string; description: string; valor: number; saldo: number }) => {
    return (
        <>
            <CardContainer>
                <InfoTransacao>
                    <TipoTransacao>{props.tipo}</TipoTransacao>
                    <DataTransacao>{props.data}</DataTransacao>
                    <Descricao>{props.description}</Descricao>
                </InfoTransacao>
                <ResumoConta>
                    <ValorTransacao>{`R$ ${props.valor}`}</ValorTransacao>
                    <SaldoConta>{`R$ ${props.saldo}`}</SaldoConta>
                </ResumoConta>
            </CardContainer>
        </>
    );
};
