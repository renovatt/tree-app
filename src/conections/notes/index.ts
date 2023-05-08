import { DataMontlyExpensesProps, DataPriorityListProps } from "../../@types";
import { db } from "../auth";
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
const handleRandomGeneratorId = () => Math.round(Math.random() * 1000)

export const handleSaveMonthlyExpensesList = async (resume: string, amount: number, UserUid: string) => {
    const expensesListCollection = collection(userCollectionRef, UserUid, 'monthlyExpenses')

    if (!resume || !amount) {
        alert("Preencha os campos corretamente!");
        return;
    } else if (amount < 1 || isNaN(amount)) {
        alert("O valor deve um número ser positivo!");
        return;
    }

    const annotation = {
        id: handleRandomGeneratorId(),
        resume: resume,
        amount: amount,
        date: Date.now()
    }

    await addDoc(expensesListCollection, annotation)
}

export const handleSavePriorityList = async (resume: string, level: string, UserUid: string) => {
    const priorityListCollection = collection(userCollectionRef, UserUid, 'priorityList')

    if (!resume) {
        alert("Preencha os campos corretamente!");
        return;
    }

    const annotation = {
        id: handleRandomGeneratorId(),
        resume: resume,
        level: level,
        date: Date.now()
    }

    await addDoc(priorityListCollection, annotation)
}

export const handleMonthlyExpensesObserver = (
    userUid: string,
    setFirebaseMontlyExpensesData: React.Dispatch<React.SetStateAction<DataMontlyExpensesProps>>
) => {
    const monthlyExpensesCollection = collection(userCollectionRef, userUid, 'monthlyExpenses')
    const monthlyExpensesOrderByDate = query(monthlyExpensesCollection, orderBy('date'))

    onSnapshot(monthlyExpensesOrderByDate, querySnapshot => {
        const newArray: DataMontlyExpensesProps = []
        
        querySnapshot.forEach(doc => {
            const { resume, amount, date } = doc.data()
            const annotation = {
                id: doc.id,
                resume: resume,
                amount: amount,
                date: new Date(date)
            }
            newArray.push(annotation);
        })
        return setFirebaseMontlyExpensesData(newArray)
    })
}

export const handlePriorityListObserver = (
    userUid: string,
    setFirebasePriorityListData: React.Dispatch<React.SetStateAction<DataPriorityListProps>>
) => {
    const priorityListCollection = collection(userCollectionRef, userUid, 'priorityList')
    const priorityListOrderByDate = query(priorityListCollection, orderBy('date'))

    onSnapshot(priorityListOrderByDate, querySnapshot => {
        const newArray: DataPriorityListProps = []

        querySnapshot.forEach(doc => {
            const { resume, date, level } = doc.data()
            const annotation = {
                id: doc.id,
                resume: resume,
                level: level,
                date: new Date(date)
            }
            newArray.push(annotation);
        })
        return setFirebasePriorityListData(newArray)
    })
}

export const deleteMonthlyExpenseDoc = async (uid: string, id: string) => {
    const monthlyExpensesCollection = collection(userCollectionRef, uid, 'monthlyExpenses')
    await deleteDoc(doc(monthlyExpensesCollection, id));
}

export const deletePriorityListDoc = async (uid: string, id: string) => {
    const priorityListCollection = collection(userCollectionRef, uid, 'priorityList')
    await deleteDoc(doc(priorityListCollection, id));
}