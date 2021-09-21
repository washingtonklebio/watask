import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import loginImg from '../../assets/login.svg'
import { Container, ContainerLeft, ContainerRight } from "./styles";

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import Spinner from '../../components/Spinner';

const Login: React.FC = () => {
    const { signIn } = useAuth();
    const { addToast } = useToast();

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLoginSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            setLoading(true);
    
            const data = {
                email,
                password
            }
    
            await signIn(data);
            
            setLoading(false);

            history.push('/dashboard');
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
            <ContainerLeft onSubmit={handleLoginSubmit}>
                <input type="text" placeholder="E-mail" value={email} onChange={({target}) => setEmail(target.value)}/>
                <input type="password" placeholder="Senha" value={password} onChange={({target}) => setPassword(target.value)} />
        
                <button type="submit">{loading ? <Spinner /> : 'Fazer Login'}</button>

                <span>Desenvolvido por <strong>Washington</strong> ❤</span>
            </ContainerLeft>
            <ContainerRight>
                <img src={loginImg} alt="Tempo"/>
                <h2>watask</h2>
                <strong>Mais controle para suas atividades...</strong>
                <Link to="register">
                    Criar conta
                    <FiArrowRight />
                </Link>
            </ContainerRight>
        </Container>
    )
}

export default Login;