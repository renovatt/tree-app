import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../conections/auth';

export const Logout = () => {
    const navigate = useNavigate()

    React.useEffect(() => {
        logout()
        setTimeout(() => {
            navigate("/")
        }, 3000);
    }, [])

    return (
        <S.Container>
            <S.Menssage>Até Breve!</S.Menssage>
        </S.Container>
    )
}
