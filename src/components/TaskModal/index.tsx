import Modal from 'react-modal'
import { Container, TaskTypeContainer } from './styles';

import closeIcon from '../../assets/close.svg'

interface NewTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeIcon} alt="Fechar"/>
            </button>

            <Container>
                <h2>Cadastar nova task</h2>
                <input type="text" placeholder="Título" />
                
                <textarea></textarea>

                <TaskTypeContainer>
                    <button type="button">
                        <span>Em aberto</span>
                    </button>
                    <button>
                        <span>Em progresso</span>
                    </button>
                    <button type="button">
                        <span>Fechada</span>
                    </button>
                </TaskTypeContainer>

                <input type="date"/>

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}