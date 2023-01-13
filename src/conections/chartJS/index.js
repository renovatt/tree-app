export const createMonthObject = (firebaseTransactionData, setMonthObject) => {
    const newArray = []
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

export const calculateTotals = (monthObject, setTotalsByMonth) => {
    const totalsEachMonth = Object.entries(monthObject.reduce((totals, current) => {
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

export const chartConfig = (totalsByMonth, setChartData) => {
    const month = []
    const amount = []
    for (const obj of totalsByMonth) {
        month.push(obj.month)
        amount.push(parseInt(obj.amount))
    }

    setChartData({
        labels: month,
        datasets: [
            {
                label: "Faturamentos dos últimos 6 meses",
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

export const chartConfigY = (totalsByMonth, setChartData) => {
    const month = []
    const amount = []
    for (const obj of totalsByMonth) {
        month.push(obj.month)
        amount.push(parseInt(obj.amount))
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