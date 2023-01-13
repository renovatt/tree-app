import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { VscTrash } from 'react-icons/vsc';
import { deletePriorityListDoc } from '../../../../conections/notes';
import { auth } from '../../../../services/firebase';
import * as S from './style'

export const ItemListPriority = ({ id, resume, svg, color }) => {
    const [user] = useAuthState(auth);
    return (
        <S.Container>
            <S.Lists key={id}>
                <S.Resume>{resume}</S.Resume>
                <S.Icon color={color}>{svg}</S.Icon>
                <S.Delete onClick={() => deletePriorityListDoc(user.uid, id)}>
                    <VscTrash />
                </S.Delete>
            </S.Lists>
        </S.Container>
    )
}
