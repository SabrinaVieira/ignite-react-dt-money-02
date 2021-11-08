import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionContainer } from "./styles";

interface ITransaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}
export function TransactionTable () { 
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(()=> {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionContainer>
            <table>
                <thead>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Catergoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    {transactions.map((transaction) => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createAt}</td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </TransactionContainer>
    )
}