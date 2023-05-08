import React from 'react'
import * as S from './style'
import { MonthlyExpenses } from '../../components/Resources/MonthlyExpenses'
import { auth } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { handleMonthlyExpensesObserver } from '../../conections/notes'
import { monthlyExpensesCalculator } from '../../conections/calculator'
import { DefaultPreview } from '../../components/Resources/Previews/DefaultPreview'
import { TfiStatsDown } from 'react-icons/tfi'
import { DataMontlyExpensesProps } from '../../@types'

export const Expenses = () => {
  const [user] = useAuthState(auth);
  const [monthlyValue, setMonthlyValue] = React.useState<number | string>(0)
  const [firebaseMontlyExpensesData, setFirebaseMontlyExpensesData] = React.useState<DataMontlyExpensesProps>([])

  React.useEffect(() => {
    handleMonthlyExpensesObserver(user?.uid as string, setFirebaseMontlyExpensesData)
    return () => handleMonthlyExpensesObserver(user?.uid as string, setFirebaseMontlyExpensesData)
  }, [])

  React.useEffect(() => {
    monthlyExpensesCalculator(firebaseMontlyExpensesData, setMonthlyValue)
  }, [firebaseMontlyExpensesData])

  return (
    <S.Container>
      <S.PreviewContent>
        <S.Title>Despesas Mensais</S.Title>
        <DefaultPreview
          svg={<TfiStatsDown color='#ef4444' />}
          text={'Despesa Mensal Atual'}
          value={monthlyValue} />
      </S.PreviewContent>
      <S.Content>
        <MonthlyExpenses />
      </S.Content>
    </S.Container >
  )
}
