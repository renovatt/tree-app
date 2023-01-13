import React from 'react'
import * as S from './style'
import { sendPasswordReset } from '../../conections/auth';
import logo from '../../assets/logo.png'

export const Reset = () => {
    const [email, setEmail] = React.useState('')

    async function handleResetPassword(e) {
        e.preventDefault()
        await sendPasswordReset(email)
        setEmail('')
    }

    return (
        <S.Container>
            <S.LogoContainer>
                <S.GrowingPlant>
                    <S.Logo src={logo} />
                </S.GrowingPlant>
                <S.Title>Tree</S.Title>
            </S.LogoContainer>
            <S.Content>
                <S.Form onSubmit={handleResetPassword}>
                    <S.InputContainer>
                        <S.Input
                            value={email}
                            required="required"
                            onChange={({ target }) => setEmail(target.value)} />
                        <S.Label>E-mail</S.Label>
                        <S.I></S.I>
                    </S.InputContainer>
                    <S.Button>Enviar</S.Button>
                </S.Form>
                <S.Info>
                    <S.LoginButton to={'/login'}>Fazer Login</S.LoginButton>
                </S.Info>
            </S.Content>
        </S.Container>
    )
}
