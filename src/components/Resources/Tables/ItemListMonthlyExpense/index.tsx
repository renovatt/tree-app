import * as S from './style'
import { VscTrash } from 'react-icons/vsc';
import { auth } from '../../../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { deleteMonthlyExpenseDoc } from '../../../../conections/notes';
import { ItemMonthyExpenseListProps } from '../../../../@types';
import { toast } from 'react-toastify';

export const ItemListMonthlyExpense = ({ id, resume, amount }: ItemMonthyExpenseListProps) => {
    const [user] = useAuthState(auth);

    const handleDeleteExpense = (userUid: string, id: string) => {
        deleteMonthlyExpenseDoc(userUid, id)
        toast.success("Item deletado com sucesso!")
    }

    return (
        <S.Container>
            <S.Lists key={id}>
                <S.Resume>{resume}</S.Resume>
                <S.Items>
                    {amount ? Number(amount).toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }) : 'R$ 00,00'}
                </S.Items>
                <S.Delete
                    onClick={() => handleDeleteExpense(user?.uid as string, id)}>
                    <VscTrash />
                </S.Delete>
            </S.Lists>
        </S.Container>
    )
}
