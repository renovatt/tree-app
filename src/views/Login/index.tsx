import React from 'react'
import * as S from './style'
import { FcGoogle } from 'react-icons/fc'
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logInWithEmailAndPassword, signInWithGoogle } from '../../conections/auth';
import logo from '../../assets/logo.png'
import { toast } from 'react-toastify';

export const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()

    React.useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { success, message } = await logInWithEmailAndPassword(email, password)
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
                    <S.Logo src={logo} alt='logo-image' />
                </S.GrowingPlant>
                <S.Title>Tree</S.Title>
                <S.Span>Seu Aplicativo para controle de finanças</S.Span>
            </S.LogoContainer>
            <S.Content>
                <S.Form onSubmit={handleLogin}>
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
                    <S.ForgotPassword to={'/reset'}>Esqueceu sua senha?</S.ForgotPassword>
                    <S.Button type='submit'>Entrar</S.Button>
                </S.Form>

                <S.Info>
                    <S.Text>ou</S.Text>
                    <S.Text>Faça login com o Google</S.Text>
                    <FcGoogle onClick={signInWithGoogle} />
                </S.Info>

                <S.Info>
                    <S.Text>Não tem um conta?</S.Text>
                    <S.Register to={'/register'}>
                        Registre-se
                    </S.Register>
                </S.Info>
            </S.Content>
        </S.Container>
    )
}
