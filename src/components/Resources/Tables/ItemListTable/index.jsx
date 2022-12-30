import React from 'react'
import * as S from './style'

export const ItemListTable = ({ resume, amount, date, svg, color }) => {
    return (
        <S.Container>
            <S.ContentLeft>
                <S.Icon color={color}>{svg}</S.Icon>
                <S.Item>{resume}</S.Item>
            </S.ContentLeft>
            <S.ContentRight>
                <S.Date>{date}</S.Date>
                <S.Amount color={color}>R$ {amount}</S.Amount>
            </S.ContentRight>
        </S.Container>
    )
}
