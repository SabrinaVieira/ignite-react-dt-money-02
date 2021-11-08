import { useContext } from "react"
import { ContainerSummary } from "./styles"
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContext } from "../TransactionContext"

export function Summary(){
    const transactions = useContext(TransactionContext);

    return(
        <ContainerSummary>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className="heightlight-background">
                 <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </ContainerSummary>
    )
}