import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';

import closeIcon from '../../assets/close.svg'
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import { Container, TaskTypeContainer, RadioBox } from './styles';
import Spinner from '../Spinner';
import { TaskContext } from '../../contexts/TaskContext';
interface NewTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TaskModal () {
    const { addToast } = useToast();
    const { taskList, isOpen, closeModal, currentTask } = useContext(TaskContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('NOT_DONE');
    const [estimate, setEstimate] = useState(moment().format('YYYY-MM-DD'));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setName(currentTask.name);
        setDescription(currentTask.description);
        setStatus(currentTask.status || 'NOT_DONE');
        setEstimate(moment(currentTask.estimate).format('YYYY-MM-DD'));
    }, [currentTask])

    const handleCreateNewTast = async (event: FormEvent) => {
        event.preventDefault();
        try {
            setLoading(true);
            const data = {
                id: currentTask.id,
                name,
                description,
                status,
                estimate
            };

            if (!currentTask.id) {
                await api.post('tasks', data)
                    .then(res => {
                        setLoading(false);
                    })
            } else {
                await api.put('tasks', data)
                .then(res => {
                    setLoading(false);
                })
            }

            taskList();
    
            closeModal();

            addToast({
                type: "success",
                title: "Atividade salva",
                description: "A atividade foi salva com sucesso!",
            });

        } catch (error) {
            setLoading(false);

            addToast({
                type: "error",
                title: "Erro no cadastro",
                description: "Ocorreu um erro ao salvar a atividade. Tente novamente",
            });
        }
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={closeModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={closeModal} className="react-modal-close">
                <img src={closeIcon} alt="Fechar"/>
            </button>

            <Container onSubmit={handleCreateNewTast}>
                <h2>Cadastar nova task</h2>
                <input type="text" placeholder="Título" value={name} onChange={({target}) => setName(target.value)} />
                
                <input className="description-task" type="text" placeholder="Descrição" value={description} onChange={({target}) => setDescription(target.value)} />

                <TaskTypeContainer>
                    <RadioBox isActive={status === 'NOT_DONE'} activeColor="#FFB830" type="button" onClick={() => { setStatus('NOT_DONE') }}>
                        <span>Em aberto</span>
                    </RadioBox>
                    <RadioBox isActive={status === 'IN_PROGRESS'} activeColor="#5089C6" type="button" onClick={() => { setStatus('IN_PROGRESS') }}>
                        <span>Em progresso</span>
                    </RadioBox>
                    <RadioBox isActive={status === 'DONE'} activeColor="#33CC95" type="button" onClick={() => { setStatus('DONE') }}>
                        <span>Fechada</span>
                    </RadioBox>
                </TaskTypeContainer>

                <input type="date" value={estimate} onChange={({target}) => setEstimate(target.value)} />

                <button type="submit">{loading ? <Spinner /> : 'Cadastrar'}</button>
            </Container>
        </Modal>
    );
}