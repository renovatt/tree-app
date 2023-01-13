import React from 'react'
import * as S from './style'
import grapich from '../../../assets/graphic-default.png'

export const ChartJSDefault = ({ text }) => {
    return (
        <S.Container>
            <S.Image onLoad={({ target }) => target.style.opacity = 1} src={grapich} />
            <S.Desc>{text}</S.Desc>
        </S.Container>
    )
}
