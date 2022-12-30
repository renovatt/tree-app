import React from 'react'
import * as S from './style'
import error from '../../../assets/error.png'

export const Error = ({ text }) => {
    return (
        <S.Container>
            <S.Image onLoad={({ target }) => target.style.opacity = 1} src={error} />
            <S.Desc>{text}</S.Desc>
        </S.Container>
    )
}
