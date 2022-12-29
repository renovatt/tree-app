import React from 'react'
import * as S from './style'
import { ModalForm } from '../ModalForm'
import { DashCashCard } from '../DashCashCard'
import { DashTable } from '../Tables/DashTable'
import { BarChart } from '../Graphs/BarChart/index.jsx'
import { DoughnutChart } from '../Graphs/DoughnutChart/index.jsx'

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

        <S.PreviewGraphDoughnut >
          <DoughnutChart />
        </S.PreviewGraphDoughnut>

        <S.PreviewGraphBar>
          <BarChart />
        </S.PreviewGraphBar>

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
