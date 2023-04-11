import React, { useEffect, useState } from 'react';
import { IsOpen } from '../isModalOpen';
import { EstruturaModal } from '../estruturaModal';
import { CardTransacoes } from './modalCardTransacoes';
import './modal.style';
import { ContentExtrato } from './modalContent';

interface BaseModalProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

export const BaseModalExtrato = ({ isModalVisible, onBackdropClick }: BaseModalProps) => {
    if (!isModalVisible) return null;

    return (
        <IsOpen onBackdropClick={onBackdropClick}>
            <EstruturaModal>
                <ContentExtrato />
            </EstruturaModal>
        </IsOpen>
    );
};
