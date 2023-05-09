import React from 'react'
import * as S from './style'
import { toast } from 'react-toastify';
import { auth } from '../../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DataMontlyExpensesProps } from '../../../@types';
import { ItemListMonthlyExpense } from '../Tables/ItemListMonthlyExpense';
import {
    handleMonthlyExpensesObserver,
    handleSaveMonthlyExpensesList
} from '../../../conections/notes';

export const MonthlyExpenses = () => {
    const [user] = useAuthState(auth);
    const listRef = React.useRef<HTMLDivElement>(null)
    const [resume, setResume] = React.useState('')
    const [amount, setAmount] = React.useState<number | string>('')
    const [firebaseMontlyExpensesData, setFirebaseMontlyExpensesData] = React.useState<DataMontlyExpensesProps>([])

    async function handleSaveMonthlyExpense(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const { success, message } = await handleSaveMonthlyExpensesList(
            resume, +amount, user?.uid as string)

        if (!success) {
            toast.error(message)
        } else {
            toast.success(message)
            setResume('')
            setAmount('')
        }
    }

    React.useEffect(() => {
        handleMonthlyExpensesObserver(user?.uid as string, setFirebaseMontlyExpensesData)
        return () => handleMonthlyExpensesObserver(user?.uid as string, setFirebaseMontlyExpensesData)
    }, [])

    React.useEffect(() => {
        listRef.current?.scrollTo(0, -listRef.current.scrollHeight)
    }, [firebaseMontlyExpensesData])

    return (
        <S.Container>
            <S.MonthlyPayments>
                <S.Header>
                    <S.SubTitle>Pagamentos Mensais</S.SubTitle>
                    <S.Form onSubmit={handleSaveMonthlyExpense}>
                        <S.Input
                            type='text'
                            value={resume}
                            placeholder='Alugel'
                            onChange={({ target }) => setResume(target.value)} />

                        <S.InputNumber
                            type='number'
                            value={amount}
                            placeholder='R$ 00,00'
                            onChange={({ target }) => setAmount(+target.value)} />
                        <S.Add type='submit'>Salvar</S.Add>
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
                            id='0'
                            key={''}
                            amount={0}
                            resume='Você parece livre este mês' />)}
                </S.ListContainer>
            </S.MonthlyPayments>
        </S.Container>
    )
}
