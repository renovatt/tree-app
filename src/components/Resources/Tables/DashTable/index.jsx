import React from 'react'
import * as S from './style'
import { TrasactionNotFound } from '../../../Helper/TrasactionNotFound'
import { ItemListTable } from '../ItemListTable'
import { HiArrowTrendingUp, HiArrowTrendingDown } from 'react-icons/hi2'

export const DashTable = ({ firebaseTransactionData }) => {

    const trasactionRef = React.useRef(null)

    React.useEffect(() => {
        trasactionRef.current.scrollTo(0, -trasactionRef.current.scrollHeight)
    }, [firebaseTransactionData])

    return (
        <S.Container>
            <S.Table ref={trasactionRef}>
                {firebaseTransactionData.length ? firebaseTransactionData
                    .map((list, index) => (
                        <ItemListTable
                            key={index}
                            id={list.id}
                            resume={list.resume}
                            amount={list.amount}
                            date={list.date}
                            color={!list.expense ? "#22c55e" : "#ef4444"}
                            svg={!list.expense ?
                                <HiArrowTrendingUp /> : <HiArrowTrendingDown />
                            } />
                    )) : (
                    <TrasactionNotFound text={'Não existe dados para este mês'} />
                )}
            </S.Table>
        </S.Container>
    )
}
