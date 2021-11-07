
import Modal from 'react-modal';
import { TransactionModalContainer, TransactionTypeContainer, RadioBoxButton } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react';
interface INewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModal){
    const [ typeTransactions, setTypeTransactions] = useState('deposit');

    return(
        <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close">
                <img src={closeImg} alt="Close Modal" />
            </button>
            <h2>Cadastrar Transação</h2>
            <TransactionModalContainer>
                <input 
                type="text" 
                placeholder="Título"
                />
                <input 
                type="number"
                placeholder="Valor" 
                />
                
                <TransactionTypeContainer>

                    <RadioBoxButton 
                    type="button"
                    onClick={()=> {setTypeTransactions('deposit');}}
                    isActive={ typeTransactions === 'deposit'}
                    // className={type === 'deposit'?? 'active' : ''}
                    >
                        <span>Entrada</span>
                        <img src={incomeImg} alt="Entrada" 
                        />
                    </RadioBoxButton>

                    <RadioBoxButton 
                    type="button"
                    onClick={()=> {setTypeTransactions('withdraw');}}
                    isActive={ typeTransactions === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBoxButton>

                </TransactionTypeContainer>

                <input 
                placeholder="Categoria"
                />
                <button type="submit">
                    Cadastrar
                </button>
            </TransactionModalContainer>
        </Modal>
    )
}