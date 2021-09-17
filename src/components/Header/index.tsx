import logo from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTaskModal: () => void;
}

export function Header({ onOpenNewTaskModal  }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="watask"/>
                <button type="button" onClick={onOpenNewTaskModal}>Nova atividade</button>
            </Content>
        </Container>
    )
}