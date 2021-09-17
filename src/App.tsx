import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboad"
import { Header } from "./components/Header"

import { GlobalStyle } from "./styles/global"
import { TaskModal } from './components/TaskModal'

Modal.setAppElement('#root');

export function App() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
      setIsNewTaskModalOpen(true);
  }
 
  function handleCloseNewTaskModal() {
      setIsNewTaskModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTaskModal={handleOpenNewTaskModal} />

      <Dashboard />

      <TaskModal isOpen={isNewTaskModalOpen} onRequestClose={handleCloseNewTaskModal} />
      
      <GlobalStyle />
    </>
  );
}
