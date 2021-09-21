import React, { FormEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import loginImg from '../../assets/login.svg'
import { Container, ContainerLeft, ContainerRight } from "./styles";

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';
import Spinner from '../../components/Spinner';

const Register: React.FC = () => {
    const { signIn } = useAuth();
    const { addToast } = useToast();

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegisterSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            setLoading(true);

            const data = {
                name,
                email,
                password
            }
    
            await api.post('/users', data)
                .then((() => {

                    addToast({
                        type: "success",
                        title: "Conta criada",
                        description: "Sua conta foi criada com sucesso! Faça login para continuar",
                    });

                    setLoading(false);

                    history.push('/');
                }))
            
        } catch (error) {
            setLoading(false);

            addToast({
                type: "error",
                title: "Erro na autenticação",
                description: "Ocorreu um erro ao fazer login, cheque as credenciais",
            });
        }
    }

    return (
        <Container>
            <ContainerLeft onSubmit={handleRegisterSubmit}>
                <input type="text" placeholder="Nome" value={name} onChange={({target}) => setName(target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={({target}) => setEmail(target.value)}/>
                <input type="password" placeholder="Senha" value={password} onChange={({target}) => setPassword(target.value)} />

                <button type="submit">{loading ? <Spinner /> : 'Registrar'}</button>

                <span>Desenvolvido por <strong>Washington</strong> ❤</span>
            </ContainerLeft>
            <ContainerRight>
                <img src={loginImg} alt="Tempo"/>
                <h2>watask</h2>
                <strong>Mais controle para suas atividades...</strong>
                <Link to="/">
                    <FiArrowLeft />
                    Já tenho  uma conta?
                </Link>
            </ContainerRight>
        </Container>
    )
}

export default Register;