import { useTransactions } from "../../hooks/useTransactions";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { DashboardContainer } from "./styles";


export function Dashboard(){
    const { transactions } = useTransactions()
    console.log({transactions})
    
    return(
        <DashboardContainer>
            <Summary />
            <TransactionTable />
        </DashboardContainer>
    )
}

