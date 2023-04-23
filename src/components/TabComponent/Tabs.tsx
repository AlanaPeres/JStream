import { SetStateAction, useState } from 'react';
import { Tab } from './Tab';
import { FormTransacao } from '../transferenciaComponent/FormTransacaoComponent/FormTransacao';
import './Tabs.css';
import { FormDeposito } from '../transferenciaComponent/FormDepositoComponent/FormDeposito';

type Props = {
    abas: string[];
};

export const Tabs = ({ abas }: Props) => {
    const [activeTab, setActiveTab] = useState(`Transferência`);

    const handleTab = (titleTab: string) => {
        setActiveTab(titleTab);
    };

    return (
        <div className="Tabs">
            <ul className="nav">
                {abas.map(aba => {
                    return <Tab classAba={activeTab === aba ? 'active' : ''} name={aba} handleClick={() => handleTab(aba)} />;
                })}
            </ul>
            <div className="outlet">{activeTab === 'Transferência' ? <FormTransacao /> : <FormDeposito />}</div>
        </div>
    );
};
