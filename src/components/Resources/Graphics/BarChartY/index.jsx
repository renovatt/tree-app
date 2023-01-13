import React from 'react'
import * as S from './style'
import { Plugin } from '../Plugin'
import { Bar } from 'react-chartjs-2'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../services/firebase'
import { handleTransactionObserver } from '../../../../conections/transactions'
import {
    calculateTotals,
    chartConfigY,
    createMonthObject
} from '../../../../conections/chartJS'
import { ChartJSDefault } from '../../../Helper/ChartJSDefault'

export const BarChartY = () => {

    const [user] = useAuthState(auth);
    const [firebaseTransactionData, setFirebaseTransactionData] = React.useState([])
    const [monthObject, setMonthObject] = React.useState([])
    const [totalsByMonth, setTotalsByMonth] = React.useState([]);
    const [chartData, setChartData] = React.useState({
        labels: [],
        datasets: [
            {
                label: "Faturamento dos últimos 6 meses",
                indexAxis: 'y',
                data: [],
            },
        ],
    })

    React.useEffect(() => {
        handleTransactionObserver(user.uid, setFirebaseTransactionData)
        return () => handleTransactionObserver(user.uid, setFirebaseTransactionData)
    }, [])

    React.useEffect(() => {
        createMonthObject(firebaseTransactionData, setMonthObject)
    }, [firebaseTransactionData])

    React.useEffect(() => {
        calculateTotals(monthObject, setTotalsByMonth);
    }, [monthObject])

    React.useEffect(() => {
        chartConfigY(totalsByMonth, setChartData)
    }, [totalsByMonth])

    return (
        <S.Container>
            {chartData.labels.length ? <Bar data={chartData} /> : <ChartJSDefault text={"Faturamento dos últimos 6 meses"} />}
        </S.Container>
    )
}
