import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { DashboardContainer } from "./styles";


export function Dashboard(){
    return(
        <DashboardContainer>
            <Summary />
            <TransactionTable />
        </DashboardContainer>
    )
}

