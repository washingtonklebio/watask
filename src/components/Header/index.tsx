import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="watask"/>
                <button type="button">Nova atividade</button>
            </Content>
        </Container>
    )
}