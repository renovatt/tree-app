import React from 'react'
import { ItemListTables } from '../ItemListTables'
import { TfiStatsUp } from 'react-icons/tfi'
import { TfiStatsDown } from 'react-icons/tfi'
import * as S from './style'

export const DashTable = ({ transactionsList }) => {
    return (
        <S.Container>
            <S.Header>
                <S.Desc>Últimas Transações</S.Desc>
            </S.Header>

            <S.Table>
                {transactionsList && transactionsList.map((list, index) => (
                    <ItemListTables
                        key={index}
                        resume={list.resume}
                        amount={list.amount}
                        date={list.date}
                        color={list.type === 'earn' ? "#22c55e" : "#ef4444"}
                        svg={list.type === 'earn' ?
                            <TfiStatsUp /> : <TfiStatsDown />
                        }
                    />
                ))}
            </S.Table>
        </S.Container>
    )
}
