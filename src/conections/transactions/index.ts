import { DataTransactionProps, TransactionProps } from '../../@types';
import { db } from '../../services/firebase'
import {
    addDoc,
    updateDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    getDoc
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
    const transactionCollection = collection(userCollectionRef, userUid, 'transaction')

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
    } else if (amount.toString().length > 5) {
        return {
            success: false,
            message: "O valor não pode ter mais do que 5 caracteres!"
        }
    } else if (resume.length > 15) {
        return {
            success: false,
            message: "O título não pode ter mais do que 15 caracteres!"
        }
    }

    const transaction = {
        id: handleRandomId(),
        resume: resume,
        amount: amount,
        expense: isExpense,
        date: Date.now(),
    }

    try {
        await addDoc(transactionCollection, transaction);
        return {
            success: true,
            message: "Transação salva com sucesso!"
        };
    } catch (error: any) {
        return {
            success: false,
            message: "Erro ao salvar a transação."
        };
    }
}

export const handleUpdateTransactionsList = async (
    id: string,
    resume: string,
    amount: number,
    isExpense: boolean,
    userUid: string
) => {
    const transactionRef = doc(collection(userCollectionRef, userUid, 'transaction'), id)

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
    } else if (amount.toString().length > 5) {
        return {
            success: false,
            message: "O valor não pode ter mais do que 5 caracteres!"
        }
    } else if (resume.length > 15) {
        return {
            success: false,
            message: "O título não pode ter mais do que 15 caracteres!"
        }
    }

    const transaction = {
        resume: resume,
        amount: amount,
        expense: isExpense,
        date: Date.now(),
    }

    try {
        await updateDoc(transactionRef, transaction);
        return {
            success: true,
            message: "Transação atualizada com sucesso!"
        };
    } catch (error: any) {
        return {
            success: false,
            message: "Erro ao atualizar a transação."
        };
    }
}

export const getTransaction = async (
    userUid: string,
    transactionId: string): Promise<TransactionProps | null> => {

    const transactionRef = doc(collection(userCollectionRef, userUid, 'transaction'), transactionId);
    const transactionDoc = await getDoc(transactionRef);

    if (transactionDoc.exists()) {
        const transactionData = transactionDoc.data();

        if (transactionData) {
            return {
                id: transactionDoc.id,
                resume: transactionData.resume,
                amount: transactionData.amount,
                expense: transactionData.expense,
                date: transactionData.date,
            };
        }
    }
    return null;
};

export const handleTransactionObserver = (
    userUid: string,
    setFirebaseTransactionData: React.Dispatch<React.SetStateAction<DataTransactionProps>>
) => {
    const transactionCollection = collection(userCollectionRef, userUid, 'transaction')
    const transactionsList = query(transactionCollection, orderBy('date'))

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
    const transactionCollection = collection(userCollectionRef, userUid, 'transaction')
    await deleteDoc(doc(transactionCollection, id));
}