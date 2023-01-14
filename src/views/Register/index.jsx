import React from 'react'
import * as S from './style'
import { auth } from '../../services/firebase'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { registerWithEmailAndPassword } from '../../conections/auth';
import logo from '../../assets/tree-logo.png'

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

    const handleRegister = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            alert("Por favor preencha todos os campos corretamente!");
        }
        await registerWithEmailAndPassword(name, email, password);
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
                            value={name}
                            required="required"
                            onChange={({ target }) => setName(target.value)} />
                        <S.Label>Nome</S.Label>
                        <S.I></S.I>
                    </S.InputContainer>

                    <S.InputContainer>
                        <S.Input
                            value={email}
                            required="required"
                            onChange={({ target }) => setEmail(target.value)} />
                        <S.Label>E-mail</S.Label>
                        <S.I></S.I>
                    </S.InputContainer>

                    <S.InputContainer>
                        <S.Input
                            type="password"
                            value={password}
                            required="required"
                            onChange={({ target }) => setPassword(target.value)} />
                        <S.Label>Senha</S.Label>
                        <S.I></S.I>
                    </S.InputContainer>
                    <S.Button>Criar conta</S.Button>
                    <S.Login to={'/login'}>Fazer Login</S.Login>
                </S.Form>
            </S.Content>
        </S.Container>
    )
}
