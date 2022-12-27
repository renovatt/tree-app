import React from 'react'
import { PreviewCashCard } from '../PreviewCashCard'
import * as S from './style'

export const Dashboard = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Dashboard</S.Title>
        <S.Logo>WL</S.Logo>
      </S.Header>
      <S.Content>
        <S.PreviewCash>
          <PreviewCashCard text={"Seu saldo"} value={'5.000'}/>
          <S.Add>+</S.Add>
        </S.PreviewCash>
        <S.PreviewGraph></S.PreviewGraph>
      </S.Content>
    </S.Container>
  )
}
