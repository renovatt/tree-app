import React from 'react'
import * as S from './style'
import { FiLogOut } from 'react-icons/fi'
import { auth } from '../../../conections/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

export const LogoutModal = () => {

  const [user] = useAuthState(auth);
  const [firstLetter, setName] = React.useState('')
  const navigate = useNavigate()

  React.useEffect(() => {
    const gettingFirstLetter = (name) => {
      const firstLetter = name.charAt(0)
      setName(firstLetter.toLocaleUpperCase())
    }
    gettingFirstLetter(user.email)
  }, [])

  const handleLogout = () => {
    navigate('/logout')
  }

  return (
    <S.Container>
      <S.Content>
        <S.UserImageContainer>
          {user.photoURL ? <S.Image src={user.photoURL} /> : firstLetter}
        </S.UserImageContainer>

        <S.UserInfoContainer>
          <S.UserName>{user.displayName}</S.UserName>
          <S.UserEmail>{user.email}</S.UserEmail>
        </S.UserInfoContainer>
      </S.Content>

      <S.ButtonContainer>
        <FiLogOut />
        <S.Button onClick={handleLogout}>Fazer Logout</S.Button>
      </S.ButtonContainer>
    </S.Container>
  )
}
