import React from 'react'
import * as S from './style'
import { GrFormClose } from 'react-icons/gr'
import { auth } from '../../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { handleSaveTransactionsList } from '../../../conections/transactions'
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2'
import { TransactionModalProps } from '../../../@types'
import { toast } from 'react-toastify';

export const TransactionModal = ({ setTransactionModal }: TransactionModalProps) => {
    const [user] = useAuthState(auth);
    const [resume, setResume] = React.useState("")
    const [amount, setAmount] = React.useState<number | string>("")
    const [isExpense, setExpense] = React.useState(false)

    async function handleSaveTransaction(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const { success, message } = await handleSaveTransactionsList(
            resume, +amount, isExpense, user?.uid as string)

        if (!success) {
            toast.error(message)
        } else {
            toast.success(message)
            setTransactionModal(false)
        }
    }

    return (
        <S.ModalContainer>
            <S.ModalContent>
                <S.Form onSubmit={handleSaveTransaction}>
                    <S.IconClose>
                        <GrFormClose onClick={() => setTransactionModal(false)} />
                    </S.IconClose>
                    <S.ValuePreview
                        type="number"
                        value={amount}
                        placeholder="R$ 00,00"
                        onChange={({ target }) => setAmount(+target.value)} />
                    <S.FormContent>
                        <S.TitleTransaction
                            type="text"
                            value={resume}
                            placeholder="Salário"
                            onChange={({ target }) => setResume(target.value)} />

                        <S.InputsContainer>
                            <S.Label htmlFor="type">
                                <HiArrowTrendingUp />
                                <S.ToogleInput
                                    className='earn'
                                    id='income'
                                    type='radio'
                                    name='type'
                                    defaultChecked
                                    onChange={() => setExpense(!isExpense)} />
                            </S.Label>

                            <S.Label htmlFor="type">
                                <HiArrowTrendingDown />
                                <S.ToogleInput
                                    className='spent'
                                    id='expense'
                                    type='radio'
                                    name='type'
                                    onChange={() => setExpense(!isExpense)} />
                            </S.Label>
                        </S.InputsContainer>
                    </S.FormContent>
                    <S.Add type='submit'>Adicionar</S.Add>
                </S.Form>
            </S.ModalContent>
        </S.ModalContainer>
    )
}
