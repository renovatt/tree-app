import React from 'react'
import { PreviewCashCard } from '../PreviewCashCard'
import { DashTable } from '../Tables/DashTable'
import * as S from './style'

export const Dashboard = ({
  earn, spent, wallet, handleAddition, transactionsList
}) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Dashboard</S.Title>
        <S.Logo>WL</S.Logo>
      </S.Header>
      <S.Content>
        <S.PreviewCash>
          <PreviewCashCard text={"Seu saldo"} value={wallet} />
          <S.Add>+</S.Add>
        </S.PreviewCash>
        <S.PreviewGraph></S.PreviewGraph>
      </S.Content>
      <DashTable transactionsList={transactionsList} />
    </S.Container>
  )
}
