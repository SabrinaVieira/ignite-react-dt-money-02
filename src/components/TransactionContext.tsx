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

type TransactionInput = Omit<ITransaction, 'id'| 'createAt'>;

// type TransactionInput = Pick<ITransaction, 'title'| 'amount' | 'type' | 'category'>;

interface ITransactionsProvider {
    children: ReactNode;
}

interface ITransactionContextdata {
    transactions: ITransaction[];
    CreateNewTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<ITransactionContextdata>(
    {} as ITransactionContextdata
)

export function TransactionsProviderContext({children}: ITransactionsProvider){
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    
    useEffect(()=> {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function CreateNewTransaction(transactionInput: TransactionInput){
        
        const response = await api.post('transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        
        console.log('respose', response)
        const { transaction } = response.data;
        setTransactions([...transactions, transaction]);
    }

    return(
        <TransactionContext.Provider value={{transactions, CreateNewTransaction}}>
            {children}
        </TransactionContext.Provider>
    )

}