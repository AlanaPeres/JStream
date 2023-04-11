import { useState } from 'react';
import { BaseModalExtrato } from '../modal/modalExtrato/modalExtrato';
import styles from './MonthlyBankStatementComponent.module.css';

type CardMonthProps = {
    month: string;
    balance: number;
};

const CardTransactions: React.FC<CardMonthProps> = ({ month, balance }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const alterarModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible);
    };

    return (
        <>
            <button onClick={alterarModal} className={styles.month}>
                <p>{month}</p>
                <p>{balance}</p>
            </button>
            <BaseModalExtrato isModalVisible={isModalVisible} onBackdropClick={alterarModal} />
        </>
    );
};

export default CardTransactions;
