import { useContext } from "react";
import { Summary } from "../Summary";
import { TransactionContext } from "../TransactionContext";
import { TransactionTable } from "../TransactionsTable";
import { DashboardContainer } from "./styles";


export function Dashboard(){
    const { transactions } = useContext(TransactionContext);
    console.log({transactions})
    
    return(
        <DashboardContainer>
            <Summary />
            <TransactionTable />
        </DashboardContainer>
    )
}

