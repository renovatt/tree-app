import React from 'react'
import * as S from './style'
import { Bar } from 'react-chartjs-2'
import { auth } from '../../../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ChartJSDefault } from '../../../Helper/ChartJSDefault'
import { handleTransactionObserver } from '../../../../conections/transactions'

import {
    calculateTotals,
    chartConfig,
    createMonthObject
} from '../../../../conections/chartJS'

import {
    ChartJsStateProps,
    DataMonthObjectChartJsProps,
    DataTotalsEachMonthChartJsProps,
    DataTransactionProps
} from '../../../../@types'

import {
    Chart as ChartJS,
    BarElement,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js/auto'

ChartJS.register(
    BarElement,
    LinearScale,
    Tooltip,
    Legend
)

ChartJS.defaults.layout.padding = 16
ChartJS.defaults.plugins.legend.display = false
ChartJS.defaults.plugins.title.display = false

export const BarChartX = () => {

    const [user] = useAuthState(auth);
    const [firebaseTransactionData, setFirebaseTransactionData] = React.useState<DataTransactionProps>([])
    const [monthObject, setMonthObject] = React.useState<DataMonthObjectChartJsProps>([])
    const [totalsByMonth, setTotalsByMonth] = React.useState<DataTotalsEachMonthChartJsProps>([]);
    const [chartData, setChartData] = React.useState<ChartJsStateProps>({
        labels: [],
        datasets: [
            {
                label: "Faturamentos dos últimos 6 meses",
                backgroundColor: [
                    "#4e79a7",
                    "#f28e2c",
                    "#e15759",
                    "#76b7b2",
                    "#59a14f",
                    "#edc948",
                ],
                data: [],
                borderWidth: 1,
                indexAxis: 'x',
            },
        ],
    });

    React.useEffect(() => {
        handleTransactionObserver(user?.uid as string, setFirebaseTransactionData)
        return () => handleTransactionObserver(user?.uid as string, setFirebaseTransactionData)
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
