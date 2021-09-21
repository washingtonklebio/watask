import styled from "styled-components";
import logoImg from '../../assets/logo-login.svg'

export const Container = styled.div`
    display: flex;
    height: 100vh;
`

export const ContainerLeft = styled.form`
    width: 45%;
    background-image: url(${logoImg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
    input {
        width: 70%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.50rem;
        border: 0;
        margin-bottom: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
    }

    button {
        width: 10rem;
        font-size: 1rem;
        color: var(--shape);
        background: var(--green-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.85rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    span {
        position: absolute;
        bottom: 1rem;
        font-size: 0.5rem;
        color: var(--green-light);
    }
`

export const ContainerRight = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--green);

    h2 {
        margin-top: 3rem;
        font-size: 2rem;
        line-height: 3rem;
        color: var(--background);
    }

    strong {
        color: var(--green-light);
        font-weight: 600;
        font-size: 1rem;
    }

    a {
        color: #ffffff;
        text-decoration: none;
        font-size: 0.8rem;

        display: flex;
        align-items: center;
        padding: 1rem;

        svg {
            margin-right: 0.5rem;
        }
    }
`