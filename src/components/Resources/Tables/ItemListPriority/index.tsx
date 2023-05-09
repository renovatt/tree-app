import { useAuthState } from 'react-firebase-hooks/auth';
import { VscTrash } from 'react-icons/vsc';
import { deletePriorityListDoc } from '../../../../conections/notes';
import { auth } from '../../../../services/firebase';
import * as S from './style'
import { ItemPriorityListProps } from '../../../../@types';
import { toast } from 'react-toastify';

export const ItemListPriority = ({ id, resume, svg, color }: ItemPriorityListProps) => {
    const [user] = useAuthState(auth);

    const handleDeleteExpense = (userUid: string, id: string) => {
        deletePriorityListDoc(userUid, id)
        toast.success("Item deletado com sucesso!")
    }

    return (
        <S.Container>
            <S.Lists key={id}>
                <S.Resume>{resume}</S.Resume>
                <S.Icon color={color}>{svg}</S.Icon>
                <S.Delete onClick={() => handleDeleteExpense(user?.uid as string, id)}>
                    <VscTrash />
                </S.Delete>
            </S.Lists>
        </S.Container>
    )
}