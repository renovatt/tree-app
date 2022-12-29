import React from 'react'
import * as S from './style'
import { ModalForm } from '../ModalForm'
import { DashCashCard } from '../DashCashCard'
import { DashTable } from '../Tables/DashTable'
import { BarChartX } from '../Graphs/BarChartX/index.jsx'
import { BarChartY } from '../Graphs/BarChartY/index.jsx'

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
        <S.PreviewGraphBarY>
          <BarChartY />
        </S.PreviewGraphBarY>
        <S.PreviewGraphBarX>
          <BarChartX />
        </S.PreviewGraphBarX>
      </S.Content>
      <S.HeaderDash>
        <S.Desc>Últimas Transações</S.Desc>
      </S.HeaderDash>
      <DashTable transactionsList={transactionsList} />
      {modalForm && <ModalForm
        handleAddition={handleAddition} setModalForm={setModalForm} />}
    </S.Container>
  )
}
