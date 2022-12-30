import React from 'react'
import * as S from './style'
import { VscTrash } from 'react-icons/vsc'
import { TfiStatsDown } from 'react-icons/tfi'
import { DefaultPreview } from '../../Resources/Previews/DefaultPreview'

export const Notes = () => {
  const priorityDataBase = localStorage.getItem("prioritiesList")
  const paymentsDataBase = localStorage.getItem("paymentsList")

  const [prioritiesList, setPrioritiesList] = React.useState(
    priorityDataBase ? JSON.parse(priorityDataBase) : [])
  const [monthlyPaymentsList, setMonthlyPaymentsList] = React.useState(
    paymentsDataBase ? JSON.parse(paymentsDataBase) : [])

  const [priorityItem, setPriorityItem] = React.useState('')
  const [paymentItem, setPaymentItem] = React.useState('')
  const [paymentAmount, setPaymentAmount] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const handleID = () => Math.round(Math.random() * 1000)
  const newPrioritiesList = { name: priorityItem, id: handleID() }
  const newMonthlyPaymentsList = { name: paymentItem, id: handleID(), amount: paymentAmount }

  const handleAddPrioritiesList = () => {
    const updatedPrioritiesList = [...prioritiesList, newPrioritiesList]
    setPrioritiesList(updatedPrioritiesList)
    localStorage.setItem("prioritiesList", JSON.stringify(updatedPrioritiesList))
    setPriorityItem('')
  }

  const handleAddMonthlyPaymentsList = () => {
    const updatedPaymentsList = [...monthlyPaymentsList, newMonthlyPaymentsList]
    setMonthlyPaymentsList(updatedPaymentsList)
    localStorage.setItem("paymentsList", JSON.stringify(updatedPaymentsList))
    setPaymentItem('')
    setPaymentAmount('')
  }

  const handleRemovePrioritiesList = (id) => {
    const listUpdated = prioritiesList.filter(i => i.id !== id)
    localStorage.setItem("prioritiesList", JSON.stringify(listUpdated))
    setPrioritiesList(listUpdated)
  }

  const handleRemoveMonthlyPaymentsList = (id) => {
    const listUpdated = monthlyPaymentsList.filter(i => i.id !== id)
    localStorage.setItem("paymentsList", JSON.stringify(listUpdated))
    setMonthlyPaymentsList(listUpdated)
  }

  React.useEffect(() => {
    const spentMonthly = monthlyPaymentsList
      .map(value => Number(value.amount))
    const spentSum = spentMonthly.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    setAmount(`R$ ${spentSum}`)
  }, [monthlyPaymentsList])

  return (
    <S.Container>
      <S.PreviewContent>
        <S.Title>Anotações</S.Title>
        <DefaultPreview
          svg={<TfiStatsDown color='#ef4444' />}
          text={'Sua Despesa Mensal'}
          value={amount} />
      </S.PreviewContent>
      <S.Content>
        <S.MonthlyPayments>
          <S.Header>
            <S.SubTitle>Pagamentos Mensais</S.SubTitle>
            <S.InputsContainer>
              <S.Input
                type='text'
                required
                value={paymentItem}
                placeholder='Digite o mone da despesa'
                onChange={({ target }) => setPaymentItem(target.value)} />

              <S.InputNumber
                type='text'
                required
                value={paymentAmount}
                placeholder='Valor'
                onChange={({ target }) => setPaymentAmount(target.value)} />
              <S.Add onClick={handleAddMonthlyPaymentsList}>Salvar</S.Add>
            </S.InputsContainer>
          </S.Header>

          <S.ListContainer>
            {monthlyPaymentsList && monthlyPaymentsList.map(({ name, id, amount }) => (
              <S.Lists key={id}>
                <S.Items>{name}</S.Items>
                <S.Items>R$ {amount}</S.Items>
                <S.Delete onClick={() => handleRemoveMonthlyPaymentsList(id)}>
                  <VscTrash />
                </S.Delete>
              </S.Lists>
            ))}
          </S.ListContainer>
        </S.MonthlyPayments>

        <S.PrioritiesList>
          <S.Header>
            <S.SubTitle>Lista de Prioridades</S.SubTitle>
            <S.InputsContainer>
              <S.Input
                type='text'
                required
                value={priorityItem}
                placeholder='Digite seu item'
                onChange={({ target }) => setPriorityItem(target.value)} />
              <S.Add onClick={handleAddPrioritiesList}>Salvar</S.Add>
            </S.InputsContainer>
          </S.Header>

          <S.ListContainer>
            {prioritiesList && prioritiesList.map(({ name, id }) => (
              <S.Lists key={id}>
                <S.Items>{name}</S.Items>
                <S.Delete onClick={() => handleRemovePrioritiesList(id)}>
                  <VscTrash />
                </S.Delete>
              </S.Lists>
            ))}
          </S.ListContainer>
        </S.PrioritiesList>
      </S.Content>
    </S.Container >
  )
}
