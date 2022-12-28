import React from 'react'
import * as S from './style'
import { VscTrash } from 'react-icons/vsc'

export const Notes = () => {
  const [priorityItem, setPriorityItem] = React.useState('')
  const [paymentItem, setPaymentItem] = React.useState('')
  const [prioritiesList, setPrioritiesList] = React.useState([])
  const [monthlyPaymentsList, setMonthlyPaymentsList] = React.useState([])

  const newPrioritiesList = { name: priorityItem }
  const newMonthlyPaymentsList = { name: paymentItem }

  const handleAddPrioritiesList = () => {
    setPrioritiesList([...prioritiesList, newPrioritiesList])
    setPriorityItem('')
  }

  const handleRemovePrioritiesList = (name) => {
    setPrioritiesList(prioritiesList.filter(i => i.name !== name))
  }

  const handleAddMonthlyPaymentsList = () => {
    setMonthlyPaymentsList([...monthlyPaymentsList, newMonthlyPaymentsList])
    setPaymentItem('')
  }

  const handleRemoveMonthlyPaymentsList = (name) => {
    setMonthlyPaymentsList(monthlyPaymentsList.filter(i => i.name !== name));
  }


  return (
    <S.Container>
      <S.Content>
        <S.PrioritiesList>
          <S.Title>Lista de Prioridades</S.Title>
          <S.Header>
            <S.Input
              type='text'
              required
              value={priorityItem}
              placeholder='Digite seu item'
              onChange={({ target }) => setPriorityItem(target.value)} />
            <S.Add onClick={handleAddPrioritiesList}>Salvar</S.Add>
          </S.Header>

          <S.ListContainer>
            {prioritiesList && prioritiesList.map(({ name }) => (
              <S.Lists key={name}>
                {name}
                <S.Delete onClick={() => handleRemovePrioritiesList(name)}>
                  <VscTrash />
                </S.Delete>
              </S.Lists>
            ))}
          </S.ListContainer>
        </S.PrioritiesList>

        <S.MonthlyPayments>
          <S.Title>Pagamentos Mensais</S.Title>
          <S.Header>
            <S.Input
              type='text'
              required
              value={paymentItem}
              placeholder='Digite sua despesa mensal'
              onChange={({ target }) => setPaymentItem(target.value)} />
            <S.Add onClick={handleAddMonthlyPaymentsList}>Salvar</S.Add>
          </S.Header>

          <S.ListContainer>
            {monthlyPaymentsList && monthlyPaymentsList.map(({ name }) => (
              <S.Lists key={name}>
                {name}
                <S.Delete onClick={() => handleRemoveMonthlyPaymentsList(name)}>
                  <VscTrash />
                </S.Delete>
              </S.Lists>
            ))}
          </S.ListContainer>
        </S.MonthlyPayments>
      </S.Content>
    </S.Container >
  )
}
