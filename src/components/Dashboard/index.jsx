import React from 'react'
import { ModalForm } from '../ModalForm'
import { DashCashCard } from '../DashCashCard'
import { DashTable } from '../Tables/DashTable'
import * as S from './style'

export const Dashboard = ({ wallet, handleAddition, transactionsList }) => {
  const [modalForm, setModalForm] = React.useState(false)
  return (
    <S.Container>
      <S.Header>
        <S.Title>Dashboard</S.Title>
        <S.Logo>WL</S.Logo>
      </S.Header>
      <S.Content>
        <S.PreviewCash>
          <DashCashCard text={"Seu saldo"} value={wallet} />
          <S.Add onClick={() => setModalForm(true)}>+</S.Add>
        </S.PreviewCash>
        <S.PreviewGraph></S.PreviewGraph>
        <S.PreviewGraphBar></S.PreviewGraphBar>
      </S.Content>
      <DashTable transactionsList={transactionsList} />
      {modalForm && <ModalForm
        handleAddition={handleAddition} setModalForm={setModalForm} />}
    </S.Container>
  )
}
