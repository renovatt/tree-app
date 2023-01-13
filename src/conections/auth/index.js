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
        sendingUserDataToFirestore(userRegister)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Google: Error! ', errorCode, errorMessage)
        console.log('Google: ', errorCode, errorMessage)
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('E-mail ou senha inválidos!')
        console.log('Login: ', errorCode, errorMessage)
    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const userRegister = {
            uid: user.uid,
            name: name,
            email: email,
            authProvider: "Local",
        }
        sendingUserDataToFirestore(userRegister)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('E-mail ou senha invalidos!')
        console.log('Register: ', errorCode, errorMessage)
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert('E-mail enviado com sucesso, por favor verifique sua caixa de entrada ou spam!')
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Usuário Não Encontrado!')
        console.log('Reset Password: ', errorCode, errorMessage)
    }
};

const logout = () => {
    signOut(auth)
}

const sendingUserDataToFirestore = async (user) => {
    const userCollectionRef = collection(db, 'users')
    const userRef = doc(userCollectionRef, user.uid)
    await setDoc(userRef, user)
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