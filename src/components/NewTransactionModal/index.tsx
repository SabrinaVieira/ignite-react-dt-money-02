
import Modal from 'react-modal';
import { TransactionModalContainer, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
interface INewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModal){
    

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
                <button>
                <span>Entrada</span>
                <img src={outcomeImg} alt="Entrada" />
                </button>
                <button>
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
                </button>
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