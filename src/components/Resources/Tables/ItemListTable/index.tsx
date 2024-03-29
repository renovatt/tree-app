import React from 'react'
import * as S from './style'
import { UpdateModalTransaction } from '../../../Modals/UpdateModalTransaction'
import { ItemTransactionListProps } from '../../../../@types'

export const ItemListTable = ({ id, resume, amount, date, svg, color }: ItemTransactionListProps) => {
    const [updateModal, setUpdateModal] = React.useState(false)

    return (
        <>
            {updateModal && <UpdateModalTransaction setUpdateModal={setUpdateModal} id={id} />}
            <S.Container onClick={() => setUpdateModal(true)}>
                <S.ContentLeft>
                    <S.Icon color={color}>{svg as any}</S.Icon>
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
