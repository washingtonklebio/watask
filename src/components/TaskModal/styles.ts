import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--green-dark);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;
        border: 0;

        &::placeholder {
            color: var(--text-body);
        }
  
        &.description-task {
            height: 5rem;
            padding: 0.5rem 1.5rem;
            margin-top: 1rem;
        }
    }


    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--green);
        color: var(--shape);
        border-radius: 0.50rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight: 600;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TaskTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`


interface RadioBoxProps {
    isActive: boolean;
    activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 3rem;
    border: 0;
    border-radius: 0.25rem;
    background: ${({isActive, activeColor}) => isActive ? transparentize(0.7, activeColor) : '#FFFFFF'};
    color: ${({isActive}) => isActive ? '#000' : '#969cb3'};


    display: flex;
    justify-content: center;
    align-items: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#00C063')};
    }

    span {
        display: inline-block;
        font-size: 0.9rem;
    }
`