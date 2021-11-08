import { createContext, ReactNode, useEffect, useState} from 'react'
import { api } from '../services/api';

interface ITransaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}

interface ITransactionsProviderContext {
    children: ReactNode;
}

export const TransactionContext = createContext<ITransaction[]>([])

export function TransactionsProviderContext({children}: ITransactionsProviderContext){
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(()=> {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return(
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )

}