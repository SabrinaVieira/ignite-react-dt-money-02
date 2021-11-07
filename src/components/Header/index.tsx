
import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container,HeaderContent } from './styles';

interface IHeader {
  onOpenNewTransactionModal: ()=> void;
}

export function Header({onOpenNewTransactionModal}: IHeader) {
    
    return(
        <Container>
            <HeaderContent>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </HeaderContent>
            
        </Container>
    )
}