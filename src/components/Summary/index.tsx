import React, { useContext, useEffect, useState } from 'react';

import { Container } from './styles'

import todoImg from '../../assets/todo.svg'
import doingImg from '../../assets/doing.svg'
import doneImg from '../../assets/done.svg'
import { TaskContext } from '../../contexts/TaskContext';

export function Summary() {
    const { tasks, currentTask } = useContext(TaskContext);
    const [opened, setOpened] = useState(0);
    const [inProgress, setInProgress] = useState(0);
    const [closed, setClosed] = useState(0);

    useEffect(() => {
        const totalOpened = tasks.filter(task => task.status == 'NOT_DONE').length;
        const totalInProgress = tasks.filter(task => task.status == 'IN_PROGRESS').length;
        const totalClosed = tasks.filter(task => task.status == 'DONE').length;

        setOpened(totalOpened);
        setInProgress(totalInProgress);
        setClosed(totalClosed);
    }, [tasks, currentTask])

    return (
       <Container>
           <div className="todo">
                <header>
                    <p>Em aberto</p>
                    <img src={todoImg} alt="Aberto"/>
                </header>
               <strong>{ opened }</strong>
           </div>
           <div className="doing">
                <header>
                    <p>Em progresso</p>
                    <img src={doingImg} alt="Progresso"/>
                </header>
                <strong>{ inProgress }</strong>
           </div>
           <div className="done">
                <header>
                    <p>Fechadas</p>
                    <img src={doneImg} alt="Fechadas"/>
                </header>
                <strong>{closed }</strong>
           </div>
       </Container>
    )
}