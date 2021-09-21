import React, { useEffect, useContext } from 'react';

import { Container } from './styles'

import editIcon from '../../assets/edit.svg'
import { TaskContext } from '../../contexts/TaskContext';

export function Table() {
    const { taskList, tasks,  editTag} = useContext(TaskContext);

    useEffect(() => {
        taskList();
    }, []);

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
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td className={task.status}><span>{task.status}</span></td>
                            <td>{ task.user.name }</td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(
                                new Date(task.estimate)
                            )}</td>
                            <td>
                                <a href="#" onClick={() => editTag(task)}>
                                    <img src={editIcon} alt="Editar"/>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
       </Container>
    )
}