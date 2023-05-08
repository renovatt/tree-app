import { ChartJsStateProps, DataMonthObjectChartJsProps, DataTotalsEachMonthChartJsProps, DataTransactionProps } from "../../@types";

export const createMonthObject = (
    firebaseTransactionData: DataTransactionProps,
    setMonthObject: React.Dispatch<React.SetStateAction<DataMonthObjectChartJsProps>>,
) => {
    const newArray: DataMonthObjectChartJsProps = []
    const currentData = new Date();

    for (let i = 0; i < 6; i++) {
        firebaseTransactionData.forEach(doc => {

            const { amount, expense, date } = doc

            if (new Intl.DateTimeFormat('pt-BR', { month: 'long' })
                .format(currentData)
                === new Intl.DateTimeFormat('pt-BR', { month: 'long' })
                    .format(new Date(date))) {
                const transaction = {
                    id: doc.id,
                    expense: expense,
                    amount: amount,
                    date: new Date(date)
                        .toLocaleDateString('pt-br', {
                            month: 'long',
                            // year: 'numeric'
                        })
                }
                newArray.push(transaction);
            }
        })
        currentData.setMonth(currentData.getMonth() - 1);
    }
    setMonthObject(newArray)
}

export const calculateTotals = (
    monthObject: DataMonthObjectChartJsProps,
    setTotalsByMonth: React.Dispatch<React.SetStateAction<DataTotalsEachMonthChartJsProps>>
) => {
    const totalsEachMonth = Object.entries(monthObject.reduce((totals: any, current: any) => {
        if (!totals[current.date]) totals[current.date] = 0;
        if (current.expense === false) {
            totals[current.date] += parseInt(current.amount);
        }
        else if (current.expense === true) {
            totals[current.date] -= parseInt(current.amount);
        }
        return totals;
    }, {})).map(([month, amount]) => ({ month, amount }));
    setTotalsByMonth(totalsEachMonth);
}

export const chartConfig = (
    totalsByMonth: DataTotalsEachMonthChartJsProps,
    setChartData: React.Dispatch<React.SetStateAction<ChartJsStateProps>>
) => {
    const month: string[] = [];
    const amount: number[] = [];
    for (const obj of totalsByMonth) {
        month.push(obj.month)
        amount.push(parseInt(obj.amount as string))
    }

    setChartData({
        labels: month,
        datasets: [
            {
                label: "Faturamentos dos últimos 6 meses",
                indexAxis: 'x',
                data: amount,
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
    })
}

export const chartConfigY = (
    totalsByMonth: DataTotalsEachMonthChartJsProps,
    setChartData: React.Dispatch<React.SetStateAction<ChartJsStateProps>>
) => {
    const month: string[] = [];
    const amount: number[] = [];
    for (const obj of totalsByMonth) {
        month.push(obj.month)
        amount.push(parseInt(obj.amount as string))
    }

    setChartData({
        labels: month,
        datasets: [
            {
                label: "Faturamento dos últimos 6 meses",
                indexAxis: 'y',
                data: amount,
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
    })
}