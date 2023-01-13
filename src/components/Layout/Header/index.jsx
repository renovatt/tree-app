import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../services/firebase'
import { LogoutModal } from '../../Modals/LogoutModal'
import * as S from './style'

export const Header = () => {
    const [logoutModal, setLogoutModal] = React.useState(false)

    const [user] = useAuthState(auth);
    const [firstLetter, setFirstLetter] = React.useState('')

    React.useEffect(() => {
        const gettingFirstLetter = (name) => {
            const firstLetter = name.charAt(0)
            setFirstLetter(firstLetter.toLocaleUpperCase())
        }
        gettingFirstLetter(user.email)
    }, [])

    const closeLogoutModal = (e) => {
        if (e.target === e.currentTarget) {
            setLogoutModal(false)
        }
    }

    return (
        <S.Header onClick={closeLogoutModal}>
            <S.Title>Dashboard</S.Title>
            <S.Content onClick={() => setLogoutModal(!logoutModal)} >
                {user.photoURL ? <S.Logo src={user.photoURL} /> :
                    <S.LetterContainer>{firstLetter}</S.LetterContainer>}
                {logoutModal && <LogoutModal setLogoutModal={setLogoutModal} />}
            </S.Content>
        </S.Header>
    )
}
