import React from 'react'
import * as S from './style'
import { PreviewCashCard } from '../PreviewCashCard'
import { TfiStatsUp } from 'react-icons/tfi'
import { TfiStatsDown } from 'react-icons/tfi'
import { BiTransfer } from 'react-icons/bi'
import { DashTable } from '../Tables/DashTable'

export const Transactions = () => {
  const dataBase = localStorage.getItem("transactions")
  const [transactionsList, setTransactionsList] = React.useState(
    dataBase ? JSON.parse(dataBase) : []
  )

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"]

  const currentMonth = new Date().toLocaleString('pt-br', {
    month: 'long',
  })

  const [earn, setEarn] = React.useState(0)
  const [spent, setSpent] = React.useState(0)
  const [wallet, setWallet] = React.useState(0)
  const [month, setMonth] = React.useState(currentMonth)

  React.useEffect(() => {
    const amountEarn = transactionsList
      .filter(item => item.type === 'earn' && item.month === month.toLowerCase())
      .map(transactions => Number(transactions.amount))
    const amountSpent = transactionsList
      .filter(item => item.type === 'spent' && item.month === month.toLowerCase())
      .map(transactions => Number(transactions.amount))

    const earnSum = amountEarn.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const spentSum = amountSpent.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const total = Math.abs(earnSum - spentSum).toFixed(2)

    setEarn(`R$ ${earnSum}`)
    setSpent(` R$ ${spentSum}`)
    setWallet(`${Number(earnSum) < Number(spentSum) ? "-" : ''} R$ ${total} `)
  }, [transactionsList, month])
  return (
    <S.Container>
      <S.Header>
        <S.Title>Transações Mensal</S.Title>
      </S.Header>
      <S.Content>
        <PreviewCashCard
          value={wallet}
          text={'Faturamento'}
          svg={<BiTransfer color='#f9004d' />} />

        <PreviewCashCard
          value={earn}
          text={'Ganhos'}
          svg={<TfiStatsUp color='#22c55e' />} />

        <PreviewCashCard
          value={spent}
          text={'Gastos'}
          svg={<TfiStatsDown color='#ef4444' />} />
      </S.Content>
      <S.CalendaryContent>
        <S.Desc>Transações</S.Desc>
        <S.MonthListContainer onClick={({ target }) => setMonth(target.value)} >
          <S.MonthList disabled>Mês</S.MonthList>
          {months.map(month => (
            <S.MonthList key={month} >
              {month}
            </S.MonthList>
          ))}
        </S.MonthListContainer>
      </S.CalendaryContent>
      <DashTable
        transactionsList={transactionsList
          .filter(list => list.month === month.toLowerCase())} />
    </S.Container >
  )
}
