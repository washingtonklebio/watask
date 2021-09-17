import { Summary } from '../Summary'
import { Table } from '../Table'
import { Container } from './styles'

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <Table />
        </Container>
    )
}