import { DataMontlyExpensesProps, DataTransactionProps, MontlyExpensesProps } from "../../@types"

export const calculator = (
    firebaseData: DataTransactionProps,
    setWallet: React.Dispatch<React.SetStateAction<number | string>>,
    setDolarValue: React.Dispatch<React.SetStateAction<number>>
) => {
    const amountEarn = firebaseData
        .filter(item => !item.expense)
        .map(transactions => Number(transactions.amount))

    const amountSpent = firebaseData
        .filter(item => item.expense)
        .map(transactions => Number(transactions.amount))

    const earnCalc = amountEarn.reduce((acc, cur) => acc + cur, 0)
    const spentCalc = amountSpent.reduce((acc, cur) => acc + cur, 0)

    const dolarValue = Math.abs(earnCalc - spentCalc)
    const total = Math.abs(earnCalc - spentCalc)
        .toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })

    setDolarValue(dolarValue)
    setWallet(`${earnCalc < spentCalc ? "-" : ''} ${total} `)
}

export const transactionCaculator = (
    firebaseData: DataTransactionProps,
    setEarn: React.Dispatch<React.SetStateAction<number | string>>,
    setSpent: React.Dispatch<React.SetStateAction<number | string>>,
    setWallet: React.Dispatch<React.SetStateAction<number | string>>,
    currentMonth: number,
    currentYear: number,
) => {

    const amountEarn = firebaseData
        .filter(item => !item.expense &&
            item.date.getMonth() === currentMonth &&
            item.date.getFullYear() === currentYear)
        .map(transactions => Number(transactions.amount))

    const amountSpent = firebaseData
        .filter(item => item.expense &&
            item.date.getMonth() === currentMonth &&
            item.date.getFullYear() === currentYear)
        .map(transactions => Number(transactions.amount))

    const earnCalc = amountEarn.reduce((acc, cur) => acc + cur, 0)
        .toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })

    const spentCalc = amountSpent.reduce((acc, cur) => acc + cur, 0)
        .toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })

    const totalEarn = amountEarn.reduce((acc, cur) => acc + cur, 0)
    const totalSpent = amountSpent.reduce((acc, cur) => acc + cur, 0)
    const total = Math.abs(totalEarn - totalSpent)
        .toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })

    setEarn(earnCalc)
    setSpent(spentCalc)
    setWallet(`${Number(totalEarn) < Number(totalSpent) ? "-" : ''} ${total} `)
}

export const monthlyExpensesCalculator = (
    firebaseMontlyExpensesData: DataMontlyExpensesProps,
    setMonthlyValue: React.Dispatch<React.SetStateAction<string | number>>,
) => {

    const amount = firebaseMontlyExpensesData
        .map((transactions: MontlyExpensesProps) => Number(transactions.amount))

    const total = amount.reduce((acc, cur) => acc + cur, 0)
    
    setMonthlyValue(total.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }))
}

export const graphicCalculator = (
    firebaseData: DataTransactionProps,
    setWallet: React.Dispatch<React.SetStateAction<number | string>>,
) => {

    const amountEarn = firebaseData
        .filter(item => !item.expense &&
            item.date.getMonth() === 0)
        .map(transactions => Number(transactions.amount))

    const amountSpent = firebaseData
        .filter(item => item.expense &&
            item.date.getMonth() === 0)
        .map(transactions => Number(transactions.amount))

    const totalEarn = amountEarn.reduce((acc, cur) => acc + cur, 0)
    const totalSpent = amountSpent.reduce((acc, cur) => acc + cur, 0)
    const total = Math.abs(totalEarn - totalSpent)

    setWallet(`${Number(totalEarn) < Number(totalSpent) ? "-" : ''} ${total} `)
}

export const dolarConversionCalculator = async (
    value: number,
    setConvertedValue: React.Dispatch<React.SetStateAction<number | string>>,
) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const data = await response.json()
    const rate = await data.USDBRL.bid
    const converted = value / rate

    setConvertedValue(converted
        .toLocaleString('us-us', {
            style: 'currency',
            currency: 'USD'
        }));
}