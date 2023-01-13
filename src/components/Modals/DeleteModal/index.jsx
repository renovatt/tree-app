import React from 'react'
import * as S from './style'
import { GrFormClose } from 'react-icons/gr'
import { auth } from '../../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { deleteTransactionDoc } from '../../../conections/transactions'

export const DeleteModal = ({ setDeleteModal, id }) => {
    const [user] = useAuthState(auth);

    function handleDeleteTransactionDoc() {
        deleteTransactionDoc(user.uid, id)
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
