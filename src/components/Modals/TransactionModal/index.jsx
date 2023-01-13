import React from 'react'
import * as S from './style'
import { GrFormClose } from 'react-icons/gr'
import { auth } from '../../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { handleSaveTransactionsList } from '../../../conections/transactions'
import { SuccessTransactionModal } from '../SuccessTransactionModal'
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2'

export const TransactionModal = ({ setTransactionModal }) => {
    const [user] = useAuthState(auth);
    const [resume, setResume] = React.useState("")
    const [amount, setAmount] = React.useState("")
    const [isExpense, setExpense] = React.useState(false)
    const [successTransactionModal, setSuccessTransactionModal] = React.useState(false)

    async function handleSaveTransaction(e) {
        e.preventDefault()
        if (!resume || !amount) {
            alert("Preencha os campos corretamente!");
            return;
        } else if (amount < 1 || isNaN(amount)) {
            alert("O valor tem que ser positivo!");
            return;
        }

        await handleSaveTransactionsList(resume, amount, isExpense, user.uid)
        setSuccessTransactionModal(true)
        setResume("")
        setAmount("")
        setTimeout(() => {
            setSuccessTransactionModal(false)
            setTransactionModal(false)
        }, 1000);

       
        // if (resume && amount) {
        //     setSuccessTransactionModal(true)
        //     setResume("")
        //     setAmount("")

        //     setTimeout(() => {
        //         setSuccessTransactionModal(false)
        //         setTransactionModal(false)
        //     }, 1000);
        // }
    }

    return (
        <>
            {successTransactionModal && <SuccessTransactionModal />}
            <S.ModalContainer>
                <S.ModalContent>
                    <S.Form>
                        <S.IconClose>
                            <GrFormClose onClick={() => setTransactionModal(false)} />
                        </S.IconClose>
                        <S.ValuePreview
                            type="text"
                            value={amount}
                            placeholder="R$ 00,00"
                            onChange={({ target }) => setAmount(target.value)} />
                        <S.FormContent>
                            <S.TitleTransaction
                                type="text"
                                value={resume}
                                placeholder="Título"
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
                        <S.Add onClick={handleSaveTransaction}>
                            Adicionar
                        </S.Add>
                    </S.Form>
                </S.ModalContent>
            </S.ModalContainer>
        </>
    )
}
