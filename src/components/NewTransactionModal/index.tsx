
import Modal from 'react-modal';
import { TransactionModalContainer } from './styles';
// import styles from './styles'

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