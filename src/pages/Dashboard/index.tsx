import React, { useState } from 'react';

import { Summary } from '../../components/Summary';
import { Table } from '../../components/Table'
import { Header } from '../../components/Header';

import { Container } from './styles'
import { TaskModal } from '../../components/TaskModal';
import { TaskProvider } from '../../contexts/TaskContext';

const Dashboard: React.FC = () => {

    return (
        <TaskProvider>
            <Header />
            <Container>
                <Summary />
                <Table />
            </Container>
            <TaskModal />
        </TaskProvider>
    )
}

export default Dashboard;