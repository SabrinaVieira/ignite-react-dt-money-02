
import Modal from 'react-modal';
import { TransactionModalContainer, TransactionTypeContainer, RadioBoxButton } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
interface INewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModal){
    const [typeTransactions, setTypeTransactions] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleCrteateNewTransaction(event: FormEvent){
        event.preventDefault();
        const data = { title, value,category,typeTransactions };
        api.post('transactions', data)
    }

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

            <TransactionModalContainer onSubmit={handleCrteateNewTransaction}>
            <h2>Cadastrar Transação</h2>

                <input 
                type="text" 
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
                />
                <input 
                type="number"
                placeholder="Valor"
                value={value}
                onChange={event => setValue(Number(event.target.value))}
                />
                
                <TransactionTypeContainer>

                    <RadioBoxButton 
                    type="button"
                    onClick={()=> {setTypeTransactions('deposit');}}
                    isActive={ typeTransactions === 'deposit'}
                    activeColor="green"
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
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBoxButton>

                </TransactionTypeContainer>

                <input 
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </TransactionModalContainer>
        </Modal>
    )
}