import React from 'react'
import * as S from './style'
import { DeleteModal } from '../../../Modals/DeleteModal'

export const ItemListTable = ({ id, resume, amount, date, svg, color }) => {
    const [deleteModal, setDeleteModal] = React.useState(false)

    return (
        <>
            {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} id={id} />}
            <S.Container onClick={() => setDeleteModal(true)}>
                <S.ContentLeft>
                    <S.Icon color={color}>{svg}</S.Icon>
                    <S.Resume>{resume}</S.Resume>
                </S.ContentLeft>
                <S.ContentRight>
                    <S.Date>{date
                        .toLocaleDateString('pt-br', {
                            year: 'numeric',
                            month: 'long',
                            weekday: 'long',
                            day: 'numeric',
                        })}
                    </S.Date>
                    <S.Amount color={color}>
                        {Number(amount).toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </S.Amount>
                </S.ContentRight>
            </S.Container>
        </>
    )
}
