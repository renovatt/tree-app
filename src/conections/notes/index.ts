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
        return {
            success: false,
            message: "Preencha os campos corretamente!"
        };
    } else if (amount < 1 || isNaN(amount)) {
        return {
            success: false,
            message: "O valor tem que ser positivo!"
        };
    } else if (amount.toString().length > 7) {
        return {
            success: false,
            message: "O valor não pode ter mais do que 7 caracteres!"
        }
    } else if (resume.length > 21) {
        return {
            success: false,
            message: "O título não pode ter mais do que 21 caracteres!"
        }
    }

    const annotation = {
        id: handleRandomGeneratorId(),
        resume: resume,
        amount: amount,
        date: Date.now()
    }

    try {
        await addDoc(expensesListCollection, annotation)
        return {
            success: true,
            message: "Despesa salva com sucesso!"
        };
    } catch (error: any) {
        return {
            success: false,
            message: "Erro ao salvar a despesa."
        };
    }
}

export const handleSavePriorityList = async (resume: string, level: string, UserUid: string) => {
    const priorityListCollection = collection(userCollectionRef, UserUid, 'priorityList')

    if (!resume) {
        return {
            success: false,
            message: "Preencha os campos corretamente!"
        };
    } else if (resume.length > 21) {
        return {
            success: false,
            message: "O título não pode ter mais do que 21 caracteres!"
        }
    }

    const annotation = {
        id: handleRandomGeneratorId(),
        resume: resume,
        level: level,
        date: Date.now()
    }

    try {
        await addDoc(priorityListCollection, annotation)
        return {
            success: true,
            message: "Item adicionado com sucesso!"
        };
    } catch (error: any) {
        return {
            success: false,
            message: "Erro ao adicianar."
        };
    }
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