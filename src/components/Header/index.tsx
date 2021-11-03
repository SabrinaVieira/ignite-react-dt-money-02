
import logoImg from '../../assets/logo.svg'
import { Container,HeaderContent } from './styles'

export function Header() {
    return(
        <Container>
            <HeaderContent>
                <img src={logoImg} alt="dt money" />
                <button type="button">
                    Nova Transação
                </button>
            </HeaderContent>
        </Container>
    )
}