import React from 'react'
import * as S from './style'
import { TransactionModal } from '../../components/Modals/TransactionModal'
import { DashboardPreview } from '../../components/Resources/Previews/DashboardPreview'
import { DashTable } from '../../components/Resources/Tables/DashTable'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebase'
import { handleTransactionObserver } from '../../conections/transactions'
import { Header } from '../../components/Layout/Header'
import { DataTransactionProps } from '../../@types'
import { BarChartY } from '../../components/Resources/Graphics/BarChartY'
import { BarChartX } from '../../components/Resources/Graphics/BarChartX'

export const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [transactionModal, setTransactionModal] = React.useState(false)
  const [firebaseTransactionData, setFirebaseTransactionData] = React.useState<DataTransactionProps>([])

  React.useEffect(() => {
    handleTransactionObserver(user?.uid as string, setFirebaseTransactionData)
    return () => handleTransactionObserver(user?.uid as string, setFirebaseTransactionData)
  }, [])

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.CashPreview>
          <DashboardPreview
            text={"Seu saldo"}
            firebaseData={firebaseTransactionData} />
          <S.Add onClick={() => setTransactionModal(true)}>+</S.Add>
        </S.CashPreview>
        <S.PreviewGraphBarY>
          {/* <BarChartY /> */}
        </S.PreviewGraphBarY>
        <S.PreviewGraphBarX>
          {/* <BarChartX /> */}
        </S.PreviewGraphBarX>
      </S.Content>
      <S.HeaderDash>
        <S.Desc>Últimas Transações</S.Desc>
      </S.HeaderDash>
      <DashTable firebaseTransactionData={firebaseTransactionData} />
      {transactionModal && <TransactionModal
        setTransactionModal={setTransactionModal} />}
    </S.Container>
  )
}
