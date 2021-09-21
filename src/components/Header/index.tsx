import React, { useCallback, useContext } from 'react';
import {
    FiLogOut
  } from "react-icons/fi";

import logo from '../../assets/logo.svg'
import { TaskContext } from '../../contexts/TaskContext';

import { useAuth } from '../../hooks/auth';

import { Container, Content, ContentButtons } from './styles'

export function Header() {
    const { signOut } = useAuth();
    const { openModal } = useContext(TaskContext);

    const handleSignOut = useCallback(() => {
        signOut();
    }, [signOut])

    return (
        <Container>
            <Content>
                <img src={logo} alt="watask"/>
                <ContentButtons>
                    <button type="button" onClick={openModal}>Nova atividade</button>
                    <span onClick={handleSignOut}>
                        <FiLogOut size={25} color="#ffffff" />
                    </span>
                </ContentButtons>
            </Content>
        </Container>
    )
}