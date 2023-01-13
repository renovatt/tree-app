import React from 'react'
import * as S from './style'
import { auth } from '../../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    handleMonthlyExpensesObserver,
    handleSaveMonthlyExpensesList
} from '../../../conections/notes';
import { ItemListMonthlyExpense } from '../Tables/ItemListMonthlyExpense';

export const MonthlyExpenses = () => {
    const [user] = useAuthState(auth);
    const listRef = React.useRef(null)
    const [resume, setResume] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [firebaseMontlyExpensesData, setFirebaseMontlyExpensesData] = React.useState([])

    async function handleSaveMonthlyExpense(e) {
        e.preventDefault()
        await handleSaveMonthlyExpensesList(resume, amount, user.uid)
        setResume('')
        setAmount('')
    }

    React.useEffect(() => {
        handleMonthlyExpensesObserver(user.uid, setFirebaseMontlyExpensesData)
        return () => handleMonthlyExpensesObserver(user.uid, setFirebaseMontlyExpensesData)
    }, [])

    React.useEffect(() => {
        listRef.current.scrollTo(0, -listRef.current.scrollHeight)
    }, [firebaseMontlyExpensesData])

    return (
        <S.Container>
            <S.MonthlyPayments>
                <S.Header>
                    <S.SubTitle>Pagamentos Mensais</S.SubTitle>
                    <S.Form>
                        <S.Input
                            type='text'
                            value={resume}
                            placeholder='Digite sua despesa'
                            onChange={({ target }) => setResume(target.value)} />

                        <S.InputNumber
                            type='text'
                            value={amount}
                            placeholder='Valor'
                            onChange={({ target }) => setAmount(target.value)} />
                        <S.Add onClick={handleSaveMonthlyExpense}>Salvar</S.Add>
                    </S.Form>
                </S.Header>

                <S.ListContainer ref={listRef}>
                    {firebaseMontlyExpensesData.length ? firebaseMontlyExpensesData
                        .map((list, index) => (
                            <ItemListMonthlyExpense
                                key={index}
                                id={list.id}
                                resume={list.resume}
                                amount={list.amount} />
                        )) : (
                        <ItemListMonthlyExpense
                            resume='Você parece livre este mês' />)}
                </S.ListContainer>
            </S.MonthlyPayments>
        </S.Container>
    )
}
