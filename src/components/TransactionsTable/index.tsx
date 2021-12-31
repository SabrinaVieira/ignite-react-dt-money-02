import { useTransactions } from "../../hooks/useTransactions";
import { TransactionContainer } from "./styles";

export function TransactionTable() {
  const { transactions } = useTransactions()

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
          {transactions?.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {transaction.createAt}
                  {/* {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createAt)
                  )} */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TransactionContainer>
  );
}
