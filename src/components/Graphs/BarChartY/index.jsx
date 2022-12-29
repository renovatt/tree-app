import React from 'react'
import { Plugin } from '../Plugin'
import { Bar } from 'react-chartjs-2'
import { FakeData } from '../../../FakeData'

export const BarChartY = () => {
    const [load, setLoad] = React.useState(false)
    const [userData, setUserData] = React.useState({
        labels: FakeData.map((data) => data.month),
        datasets: [
            {
                label: "Total de Ganhos do mês",
                indexAxis: 'y',
                data: FakeData.map((data) => data.userGain),
                backgroundColor: [
                    "#cbc3b9",
                    "#2f2d2b",
                    "#1ac7c7",
                    "#c7731a",
                    "#d6178a",
                    "#2a71d0",
                    "#f3ba2f",
                    "#e10f24",
                ],
                borderWidth: 0,
            },
        ],
    });
    return (
        <Bar data={userData} />
    )
}
