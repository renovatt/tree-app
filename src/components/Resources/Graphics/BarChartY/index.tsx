import React from 'react'
import * as S from './style'
// import { Plugin } from '../Plugin'
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
import { ChartJsStateProps, DataMonthObjectChartJsProps, DataTotalsEachMonthChartJsProps, DataTransactionProps } from '../../../../@types'

export const BarChartY = () => {

    const [user] = useAuthState(auth);
    const [firebaseTransactionData, setFirebaseTransactionData] = React.useState<DataTransactionProps>([])
    const [monthObject, setMonthObject] = React.useState<DataMonthObjectChartJsProps>([])
    const [totalsByMonth, setTotalsByMonth] = React.useState<DataTotalsEachMonthChartJsProps>([]);
    const [chartData, setChartData] = React.useState<ChartJsStateProps>({
        labels: ["January", "February", "March", "April", "May", "June"],
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
                data: [0, 0, 0, 0, 0, 0],
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
        chartConfigY(totalsByMonth, setChartData)
    }, [totalsByMonth])

    return (
        <S.Container>
            {chartData.labels.length ? <Bar data={chartData} /> : <ChartJSDefault text={"Faturamento dos últimos 6 meses"} />}
        </S.Container>
    )
}
