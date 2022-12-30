import React from 'react'
import { ItemListTable } from '../ItemListTable'
import { TfiStatsUp } from 'react-icons/tfi'
import { TfiStatsDown } from 'react-icons/tfi'
import { Error } from '../../../Helper/Error'
import * as S from './style'

export const DashTable = ({ transactionsList }) => {
    return (
        <S.Container>
            <S.Table>
                {transactionsList.length > 0 ? transactionsList.map((list, index) => (
                    <ItemListTable
                        key={index}
                        resume={list.resume}
                        amount={list.amount}
                        date={list.date}
                        color={list.type === 'earn' ? "#22c55e" : "#ef4444"}
                        svg={list.type === 'earn' ?
                            <TfiStatsUp /> : <TfiStatsDown />} />
                )) : (
                    <Error text={'Não existe dados para este mês'} />
                )}
            </S.Table>
        </S.Container>
    )
}
