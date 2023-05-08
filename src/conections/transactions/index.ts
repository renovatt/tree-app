import { DataTransactionProps } from '../../@types';
import { db } from '../../services/firebase'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query
} from "firebase/firestore";

const userCollectionRef = collection(db, 'users')
const handleRandomId = () => Math.round(Math.random() * 1000)

export const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

export const years = [
    2022,
    2023,
    2024,
    2025,
    2026,
]

export const currentMonth = new Date()
    .toLocaleString('pt-br', {
        month: 'long'
    })

export const currentYearShow = new Date()
    .toLocaleString('pt-br', {
        year: 'numeric'
    })

export const handleSaveTransactionsList = async (
    resume: string,
    amount: number,
    isExpense: boolean,
    userUid: string
) => {
    const trasactionCollection = collection(userCollectionRef, userUid, 'transaction')

    if (!resume || !amount) {
        alert("Preencha os campos corretamente!");
        return;
    } else if (amount < 1 || isNaN(amount)) {
        alert("O valor tem que ser positivo!");
        return;
    }

    const transaction = {
        id: handleRandomId(),
        resume: resume,
        amount: amount,
        expense: isExpense,
        date: Date.now(),
    }
    await addDoc(trasactionCollection, transaction)
}

export const handleTransactionObserver = (
    userUid: string,
    setFirebaseTransactionData: React.Dispatch<React.SetStateAction<DataTransactionProps>>
) => {
    const trasactionCollection = collection(userCollectionRef, userUid, 'transaction')
    const transactionsList = query(trasactionCollection, orderBy('date'))

    onSnapshot(transactionsList, querySnapshot => {
        const newArray: DataTransactionProps = []
        querySnapshot.forEach(doc => {
            const { resume, amount, expense, date } = doc.data()
            const transaction = {
                id: doc.id,
                resume: resume,
                amount: amount,
                expense: expense,
                date: new Date(date)
            }
            newArray.push(transaction);
        })
        return setFirebaseTransactionData(newArray)
    })
}

export const deleteTransactionDoc = async (userUid: string, id: string) => {
    const trasactionCollection = collection(userCollectionRef, userUid, 'transaction')
    await deleteDoc(doc(trasactionCollection, id));
}