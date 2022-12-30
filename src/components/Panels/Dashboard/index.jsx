import React from 'react'
import * as S from './style'
import { Modal } from '../../Layout/Modal'
import { DashboardPreview } from '../../Resources/Previews/DashboardPreview'
import { DashTable } from '../../Resources/Tables/DashTable'
import { BarChartX } from '../../Resources/Graphics/BarChartX/index.jsx'
import { BarChartY } from '../../Resources/Graphics/BarChartY/index.jsx'

export const Dashboard = ({ wallet, handleAddition, transactionsList }) => {
  const [modal, setModal] = React.useState(false)
  return (
    <S.Container>
      <S.Header>
        <S.Title>Dashboard</S.Title>
        <S.Logo>WL</S.Logo>
      </S.Header>
      <S.Content>
        <S.CashPreview>
          <DashboardPreview text={"Seu saldo"} value={wallet} />
          <S.Add onClick={() => setModal(true)}>+</S.Add>
        </S.CashPreview>
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
      {modal && <Modal
        handleAddition={handleAddition} setModal={setModal} />}
    </S.Container>
  )
}
