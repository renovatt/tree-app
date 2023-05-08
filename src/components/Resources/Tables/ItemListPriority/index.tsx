import { useAuthState } from 'react-firebase-hooks/auth';
import { VscTrash } from 'react-icons/vsc';
import { deletePriorityListDoc } from '../../../../conections/notes';
import { auth } from '../../../../services/firebase';
import * as S from './style'
import { ItemPriorityListProps } from '../../../../@types';

export const ItemListPriority = ({ id, resume, svg, color }: ItemPriorityListProps) => {
    const [user] = useAuthState(auth);
    return (
        <S.Container>
            <S.Lists key={id}>
                <S.Resume>{resume}</S.Resume>
                <S.Icon color={color}>{svg}</S.Icon>
                <S.Delete onClick={() => deletePriorityListDoc(user?.uid as string, id)}>
                    <VscTrash />
                </S.Delete>
            </S.Lists>
        </S.Container>
    )
}