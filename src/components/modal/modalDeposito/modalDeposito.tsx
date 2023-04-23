import { EstruturaModal } from '../estruturaModal';
import { IsOpen } from '../isModalOpen';
import { ModalDepositoContent } from './modalDepositoContent';

interface modalDepositoProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

export const modalDeposito: React.FC<modalDepositoProps> = ({ onBackdropClick, isModalVisible }) => {
    if (!isModalVisible) {
        return null;
    }

    return (
        <IsOpen onBackdropClick={onBackdropClick}>
            <EstruturaModal>
                <ModalDepositoContent />
            </EstruturaModal>
        </IsOpen>
    );
};

export default modalDeposito;
