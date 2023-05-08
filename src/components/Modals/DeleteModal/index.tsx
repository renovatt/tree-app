import React from 'react'
import * as S from './style'
import { GrFormClose } from 'react-icons/gr'
import { auth } from '../../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { deleteTransactionDoc } from '../../../conections/transactions'
import { DeleteModalProps } from '../../../@types'

export const DeleteModal = ({ setDeleteModal, id }: DeleteModalProps) => {
    const [user] = useAuthState(auth);

    function handleDeleteTransactionDoc() {
        deleteTransactionDoc(user?.uid as string, id)
        setDeleteModal(false)
    }

    return (
        <S.ModalContainer>
            <S.Content>
                <GrFormClose onClick={() => setDeleteModal(false)} />
                <S.Title>Deseja excluir essa transação?</S.Title>
                <S.Add onClick={handleDeleteTransactionDoc}>Excluir</S.Add>
            </S.Content>
        </S.ModalContainer>
    )
}
