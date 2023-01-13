import React from 'react'
import * as S from './style'
import notFound from '../../../assets/not-found.png'

export const TrasactionNotFound = ({ text }) => {
    return (
        <S.Container>
            <S.Image onLoad={({ target }) => target.style.opacity = 1} src={notFound} />
            <S.Desc>{text}</S.Desc>
        </S.Container>
    )
}
