
import Modal from 'react-modal';
// import styles from './styles'

interface INewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModal){
    

    return(
        <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}>
            <h2>Cadastrar Transação</h2>
        </Modal>
    )
}