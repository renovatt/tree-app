import React from 'react'
import * as S from './style'
import { GrFormClose } from 'react-icons/gr'

export const ModalForm = ({ handleAddition, setModalForm }) => {
    const [resume, setResume] = React.useState("")
    const [amount, setAmount] = React.useState("")
    const [type, setType] = React.useState("")
    const handleID = () => Math.round(Math.random() * 1000)
    const handleDate = () => {
        const currentDateTime = new Date()
        const dateFormatter = new Intl.DateTimeFormat('pt-br', {
            day: 'numeric',
            month: 'long',
        }).format(currentDateTime)
        return dateFormatter
    }
    const handleMonth = () => {
        const currentDateTime = new Date()
        const dateFormatter = new Intl.DateTimeFormat('pt-br', {
            month: 'long',
        }).format(currentDateTime)
        return dateFormatter
    }

    function handleSaveTransactionsList() {
        if (!resume || !amount || !type) {
            alert("Preencha os campos corretamente!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: handleID(),
            resume: resume,
            amount: amount,
            type: type,
            date: handleDate(),
            month: handleMonth()
        }
        handleAddition(transaction)
        setResume("")
        setAmount("")
        setModalForm(false)
    }
    return (
        <S.ModalContainer>
            <S.ModalContent>
                <S.Form>
                    <GrFormClose onClick={() => setModalForm(false)} />
                    <S.Value
                        type="text"
                        value={amount}
                        placeholder="R$ 00.00"
                        onChange={({ target }) => setAmount(target.value)} />
                    <S.FormContent>
                        <S.Title
                            type="text"
                            value={resume}
                            placeholder="Título"
                            onChange={({ target }) => setResume(target.value)} />
                        <S.Select onChange={({ target }) => setType(target.value)}>
                            <S.Option>Escolher</S.Option>
                            <S.Option value="earn">Ganho</S.Option>
                            <S.Option value="spent">Despesa</S.Option>
                        </S.Select>
                    </S.FormContent>
                    <S.Add onClick={handleSaveTransactionsList}>
                        Adicionar
                    </S.Add>
                </S.Form>

            </S.ModalContent>
        </S.ModalContainer>
    )
}
