import React from 'react'
import * as S from './style'

export const PreviewCashCard = ({ value, text, svg }) => {
    return (
        <S.Container>
            <S.Card>
                {svg}
                <S.Content>
                    <S.Value>{value}</S.Value>
                    <S.Text>{text}</S.Text>
                </S.Content>
            </S.Card>
        </S.Container>
    )
}
