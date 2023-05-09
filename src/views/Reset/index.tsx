import React from 'react'
import * as S from './style'
import { sendPasswordReset } from '../../conections/auth';
import logo from '../../assets/logo.png'
import { toast } from 'react-toastify';

export const Reset = () => {
    const [email, setEmail] = React.useState('')

    async function handleResetPassword(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const { success, message } = await sendPasswordReset(email)
        if (!success) {
            toast.error(message)
        } else {
            toast.success(message)
            setEmail('')
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
                <S.Form onSubmit={handleResetPassword}>
                    <S.InputContainer>
                        <S.Input
                            type='email'
                            value={email}
                            required
                            onChange={({ target }) => setEmail(target.value)} />
                        <S.Label>E-mail</S.Label>
                        <S.I></S.I>
                    </S.InputContainer>
                    <S.Button type='submit'>Enviar</S.Button>
                </S.Form>
                <S.Info>
                    <S.LoginButton to={'/login'}>Fazer Login</S.LoginButton>
                </S.Info>
            </S.Content>
        </S.Container>
    )
}
