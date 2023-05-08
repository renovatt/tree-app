import React from 'react'
import * as S from './style'
import { BiTransfer } from 'react-icons/bi'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { BsCalendarCheck } from 'react-icons/bs'
import { HiArrowTrendingUp, HiArrowTrendingDown } from 'react-icons/hi2'
import { auth } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { transactionCaculator } from '../../conections/calculator'
import { DashTable } from '../../components/Resources/Tables/DashTable'
import { DefaultPreview } from '../../components/Resources/Previews/DefaultPreview'
import {
  months,
  years,
  handleTransactionObserver
} from '../../conections/transactions'
import { DataTransactionProps, TransactionProps } from '../../@types'

export const Transactions = () => {

  const [user] = useAuthState(auth);
  const [earn, setEarn] = React.useState<number | string>(0)
  const [spent, setSpent] = React.useState<number | string>(0)
  const [wallet, setWallet] = React.useState<number | string>(0)
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear())
  const [firebaseTransactionData, setFirebaseTransactionData] = React.useState<DataTransactionProps>([])

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(event.target.value);
    setCurrentYear(selectedYear);
  };


  React.useEffect(() => {
    handleTransactionObserver(user?.uid as string, setFirebaseTransactionData)
    return () => handleTransactionObserver(user?.uid as string, setFirebaseTransactionData)
  }, [])

  React.useEffect(() => {
    transactionCaculator(
      firebaseTransactionData,
      setEarn,
      setSpent,
      setWallet,
      currentMonth,
      currentYear
    )
  }, [firebaseTransactionData, currentMonth, currentYear])


  const handlePrevClickMonth = () => {
    setCurrentMonth(currentMonth === 0 ? months.length - 1 : currentMonth - 1);
  }

  const handleNextClickMonth = () => {
    setCurrentMonth((currentMonth + 1) % months.length);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Transações Mensais</S.Title>
      </S.Header>

      <S.Content>
        <DefaultPreview
          value={wallet}
          text={'Faturamento'}
          svg={<BiTransfer color='#f9004d' />} />

        <DefaultPreview
          value={earn}
          text={'Ganhos'}
          svg={<HiArrowTrendingUp color='#22c55e' />} />

        <DefaultPreview
          value={spent}
          text={'Gastos'}
          svg={<HiArrowTrendingDown color='#ef4444' />} />
      </S.Content>

      <S.CalendaryContainer>
        <S.Desc>Transações</S.Desc>

        <S.CalendaryContent>
          <S.SliderWrapper>
            <BsCalendarCheck />
            <S.LeftArrow onClick={handlePrevClickMonth}>
              <IoIosArrowBack />
            </S.LeftArrow>
            <S.CalendarIconWrapper>
              <S.Month>{months[currentMonth]}</S.Month>
            </S.CalendarIconWrapper>
            <S.RightArrow onClick={handleNextClickMonth}>
              <IoIosArrowForward />
            </S.RightArrow>
          </S.SliderWrapper>

          <S.YearListContainer onChange={handleYearChange}>
            <S.YearList>{currentYear}</S.YearList>
            {years.map(year => (
              <S.YearList key={year} value={year}>
                {year}
              </S.YearList>
            ))}
          </S.YearListContainer>
        </S.CalendaryContent>
      </S.CalendaryContainer>

      <DashTable
        firebaseTransactionData={firebaseTransactionData
          .filter((list: TransactionProps) =>
            list.date.getMonth() === currentMonth &&
            list.date.getFullYear() === Number(currentYear))}
      />
    </S.Container >
  )
}
