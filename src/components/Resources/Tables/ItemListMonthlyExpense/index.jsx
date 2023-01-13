import React from 'react'
import * as S from './style'
import { VscTrash } from 'react-icons/vsc';
import { auth } from '../../../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { deleteMonthlyExpenseDoc } from '../../../../conections/notes';

export const ItemListMonthlyExpense = ({ id, resume, amount }) => {
    const [user] = useAuthState(auth);
    return (
        <S.Container>
            <S.Lists key={id}>
                <S.Items>{resume}</S.Items>
                <S.Items>
                    {amount ? Number(amount).toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }) : 'R$ 00,00'}
                </S.Items>
                <S.Delete
                    onClick={() => deleteMonthlyExpenseDoc(user.uid, id)}>
                    <VscTrash />
                </S.Delete>
            </S.Lists>
        </S.Container>
    )
}
