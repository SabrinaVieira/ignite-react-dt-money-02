import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProviderContext } from './components/TransactionContext';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalIsOpen, setIsNewTransactionModalIsOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalIsOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalIsOpen(false);
    }

  return (
    <TransactionsProviderContext>
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />      
      
      <NewTransactionModal 
      isOpen={isNewTransactionModalIsOpen} 
      onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />

    </TransactionsProviderContext>
  );
}

