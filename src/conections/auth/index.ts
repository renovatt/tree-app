import { UserProps } from "../../@types";
import { db } from "../../services/firebase";
import { auth } from "../../services/firebase";
import { googleProvider } from "../../services/firebase";
import {
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    collection,
    doc,
    setDoc,
} from "firebase/firestore";

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const userRegister = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            authProvider: "Google",
        }
        await sendingUserDataToFirestore(userRegister);
        return { success: true, message: 'Seja bem vindo!' };
    } catch (error: any) {
        return { success: false, message: 'Problema ao fazer login!' };
    }
}

const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return { success: true, message: 'Seja bem vindo!' };
    } catch (error: any) {
        return { success: false, message: 'E-mail ou senha inválidos!' };
    }
}

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const userRegister = {
            uid: user.uid,
            name: name,
            email: email,
            authProvider: "Local",
        }
        await sendingUserDataToFirestore(userRegister);
        return { success: true, message: 'Registro realizado com sucesso!' };
    } catch (error: any) {
        return { success: false, message: 'Problema ao realizar o registro, senha precisa ter pelo menos 6 caracteres.' };
    }
}

const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return { success: true, message: 'Verifique o seu e-mail!' };
    } catch (error: any) {
        return { success: false, message: 'Usuário não encontrado!' };
    }
};

const logout = () => {
    signOut(auth);
}

const sendingUserDataToFirestore = async (user: UserProps) => {
    const userCollectionRef = collection(db, 'users')
    const userRef = doc(userCollectionRef, user.uid)
    await setDoc(userRef, user);
}

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};
