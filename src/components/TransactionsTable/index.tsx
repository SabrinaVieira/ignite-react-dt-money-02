import { useEffect } from "react";
import { api } from "../../services/api";
import { TransactionContainer } from "./styles";

export function TransactionTable () { 

    useEffect(()=> {
        api.get('transactions')
        .then(response => console.log(response.data))
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
                    <tr>
                        <td >Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td >Desenvolvimento de website</td>
                        <td className="withdraw">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </TransactionContainer>
    )
}