import React, { createContext, useCallback, useState  } from 'react';

import api from '../services/api';

interface User {
    name: string;
}

interface Task {
    id?: string;
    name: string;
    description: string;
    status: string;
    estimate: string;
    user: User;
}

type TaskContextData = {
    taskList(): Promise<void>;
    editTag(task: Task): Promise<void>;
    openModal:  () => void;
    closeModal:  () => void;
    tasks: Array<Task>;
    currentTask: any;
    isOpen: boolean;
}

export const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export const TaskProvider: React.FC = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [currentTask, setCurrentTask] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const taskList = useCallback(async () => {
        await api.get('tasks')
            .then(({data}) => {

                setTasks(data);
            });
    }, []);

    const editTag = useCallback(async (task) => {
        setCurrentTask(task)
        setIsOpen(true);
    }, []);


    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setCurrentTask({})
    }


    return (
        <TaskContext.Provider value={{ taskList,
            tasks,
            editTag,
            currentTask,
            openModal,
            closeModal,
            isOpen
        }}>
            {children}
        </TaskContext.Provider>
    );
}