import React from 'react'
import { ItemListTables } from '../ItemListTables'
import { TfiStatsUp } from 'react-icons/tfi'
import { TfiStatsDown } from 'react-icons/tfi'
import error from '../../../assets/error.png'
import * as S from './style'

export const DashTable = ({ transactionsList }) => {
    return (
        <S.Container>
            <S.Table>
                {transactionsList.length > 0 ? transactionsList.map((list, index) => (
                    <ItemListTables
                        key={index}
                        resume={list.resume}
                        amount={list.amount}
                        date={list.date}
                        color={list.type === 'earn' ? "#22c55e" : "#ef4444"}
                        svg={list.type === 'earn' ?
                            <TfiStatsUp /> : <TfiStatsDown />} />
                )) : (
                    <S.ImageContainer>
                        <S.Image onLoad={({ target }) => target.style.opacity = 1} src={error} />
                        <S.Desc>Não existe dados para este mês</S.Desc>
                    </S.ImageContainer>
                )}
            </S.Table>
        </S.Container>
    )
}
