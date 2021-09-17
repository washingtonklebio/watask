import { Container } from './styles'

import editIcon from '../../assets/edit.svg'

export function Table() {
    return (
       <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Status</th>
                        <th>Desenvolvedor</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de plataforma web</td>
                        <td className="status todo"><span>Todo</span></td>
                        <td>Washington</td>
                        <td>16/09/2021</td>
                        <td>
                            <a href="#">
                                <img src={editIcon} alt="Editar"/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de plataforma web</td>
                        <td className="status doing"><span>Doing</span></td>
                        <td>Washington</td>
                        <td>16/09/2021</td>
                        <td>
                            <a href="#">
                                <img src={editIcon} alt="Editar"/>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de plataforma web</td>
                        <td className="status done"><span>Done</span></td>
                        <td>Washington</td>
                        <td>16/09/2021</td>
                        <td>
                            <a href="#">
                                <img src={editIcon} alt="Editar"/>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
       </Container>
    )
}