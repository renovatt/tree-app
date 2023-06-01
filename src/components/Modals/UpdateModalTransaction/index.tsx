import React from 'react'
import * as S from './style'
import { toast } from 'react-toastify';
import { GrFormClose } from 'react-icons/gr'
import { auth } from '../../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { UpdateModalProps } from '../../../@types'
import { HiArrowTrendingUp, HiArrowTrendingDown } from 'react-icons/hi2'
import {
    deleteTransactionDoc,
    getTransaction,
    handleUpdateTransactionsList
} from '../../../conections/transactions'

export const UpdateModalTransaction = ({ setUpdateModal, id }: UpdateModalProps) => {
    const [user] = useAuthState(auth);
    const [resume, setResume] = React.useState("")
    const [amount, setAmount] = React.useState<number | string>("")
    const [isExpense, setExpense] = React.useState(false)

    function handleDeleteTransactionDoc() {
        deleteTransactionDoc(user?.uid as string, id)
        toast.success("Transação excluída com sucesso!")
        setUpdateModal(false)
    }

    async function handleUpdateTransaction(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const { success, message } = await handleUpdateTransactionsList(
            id, resume, +amount, isExpense, user?.uid as string)

        if (!success) {
            toast.error(message)
        } else {
            toast.success(message)
            setUpdateModal(false)
        }
    }

    async function getTransactionDoc() {
        const transactionDoc = await getTransaction(user?.uid as string, id);
        if (transactionDoc) {
            setResume(transactionDoc.resume)
            setAmount(transactionDoc.amount)
            setExpense(transactionDoc.expense)
        }
    }

    React.useEffect(() => {
        getTransactionDoc();
    }, [id, user]);

    return (
        <S.ModalContainer>
            <S.ModalContent>
                <S.Form onSubmit={handleUpdateTransaction}>
                    <S.IconClose>
                        <GrFormClose onClick={() => setUpdateModal(false)} />
                    </S.IconClose>
                    <S.ValuePreview
                        type="number"
                        value={amount}
                        placeholder="R$ 00,00"
                        onChange={({ target }) => setAmount(+target.value)}
                    />
                    <S.FormContent>
                        <S.TitleTransaction
                            type="text"
                            value={resume}
                            placeholder="Salário"
                            onChange={({ target }) => setResume(target.value)}
                        />
                        <S.InputsContainer>
                            <S.Label htmlFor="type">
                                <HiArrowTrendingUp />
                                <S.ToogleInput
                                    className='earn'
                                    id='income'
                                    type='radio'
                                    name='type'
                                    checked={!isExpense}
                                    onChange={() => setExpense(!isExpense)} />
                            </S.Label>

                            <S.Label htmlFor="type">
                                <HiArrowTrendingDown />
                                <S.ToogleInput
                                    className='spent'
                                    id='expense'
                                    type='radio'
                                    name='type'
                                    checked={isExpense}
                                    onChange={() => setExpense(!isExpense)} />
                            </S.Label>
                        </S.InputsContainer>
                    </S.FormContent>
                    <S.ButtonContainer>
                        <S.Add onClick={handleDeleteTransactionDoc}>Excluir</S.Add>
                        <S.Add type='submit'>Atualizar</S.Add>
                    </S.ButtonContainer>
                </S.Form>
            </S.ModalContent>
        </S.ModalContainer>
    )
}
