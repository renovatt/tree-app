import React from 'react'
import * as S from './style'
import { auth } from '../../services/firebase'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { registerWithEmailAndPassword } from '../../conections/auth';
import logo from '../../assets/logo.png'
import { toast } from 'react-toastify';

export const Register = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!name || !email || !password) {
            toast.error("Por favor preencha todos os campos corretamente!");
        }
        const { success, message } = await registerWithEmailAndPassword(name, email, password);
        if (!success) {
            toast.error(message)
        } else {
            toast.success(message)
        }
    }

    return (
        <S.Container>
            <S.LogoContainer>
                <S.GrowingPlant>
                    <S.Logo src={logo} />
                </S.GrowingPlant>
                <S.Title>Tree</S.Title>
                <S.Span>Seu Aplicativo para controle de finanças</S.Span>
            </S.LogoContainer>
            <S.Content>
                <S.Form onSubmit={handleRegister}>
                    <S.InputContainer>
                        <S.Input
                            type='text'
                            value={name}
                            required
                            onChange={({ target }) => setName(target.value)} />
                        <S.Label>Nome</S.Label>
                        <S.I></S.I>
                    </S.InputContainer>

                    <S.InputContainer>
                        <S.Input
                            type='email'
                            value={email}
                            required
                            onChange={({ target }) => setEmail(target.value)} />
                        <S.Label>E-mail</S.Label>
                        <S.I></S.I>
                    </S.InputContainer>

                    <S.InputContainer>
                        <S.Input
                            type="password"
                            value={password}
                            required
                            onChange={({ target }) => setPassword(target.value)} />
                        <S.Label>Senha</S.Label>
                        <S.I></S.I>
                    </S.InputContainer>
                    <S.Button type='submit'>Criar conta</S.Button>
                    <S.Login to={'/login'}>Fazer Login</S.Login>
                </S.Form>
            </S.Content>
        </S.Container>
    )
}
