import React from 'react'
import * as S from './style'
import { Plugin } from '../Plugin'
import { Bar } from 'react-chartjs-2'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../services/firebase'
import { handleTransactionObserver } from '../../../../conections/transactions'
import {
    calculateTotals,
    chartConfig,
    createMonthObject
} from '../../../../conections/chartJS'
import { ChartJSDefault } from '../../../Helper/ChartJSDefault'

export const BarChartX = () => {

    const [user] = useAuthState(auth);
    const [firebaseTransactionData, setFirebaseTransactionData] = React.useState([])
    const [monthObject, setMonthObject] = React.useState([])
    const [totalsByMonth, setTotalsByMonth] = React.useState([]);
    const [chartData, setChartData] = React.useState({
        labels: [],
        datasets: [
            {
                label: "Faturamentos dos últimos 6 meses",
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
        chartConfig(totalsByMonth, setChartData)
    }, [totalsByMonth])

    return (
        <S.Container>
            {chartData.labels.length ? <Bar data={chartData} /> : <ChartJSDefault text={"Faturamento dos últimos 6 meses"} />}
        </S.Container>
    )
}
