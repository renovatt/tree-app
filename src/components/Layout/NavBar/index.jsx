import React from 'react'
import * as S from './style'
import { auth } from '../../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoNote } from 'react-icons/go'
import { BiTransfer } from 'react-icons/bi'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsBank2, BsGithub } from 'react-icons/bs'
import { MdOutlinePayments } from 'react-icons/md'
import { RiLogoutCircleLine } from 'react-icons/ri'

export const NavBar = () => {
    const [user] = useAuthState(auth);
    const [isActive, setIsActive] = React.useState(false)
    return (
        <>
            {user &&
                <S.Navigation active={isActive}>
                    <S.ListContainer>
                        <S.List>
                            <S.NavLink to='/'>
                                <S.Icon><Logo /></S.Icon>
                                <S.Title>Tree</S.Title>
                            </S.NavLink>
                        </S.List>

                        <S.List>
                            <S.NavLink to='/'>
                                <S.Icon><BsBank2 /></S.Icon>
                                <S.Title>Dashboard</S.Title>
                            </S.NavLink>
                        </S.List>


                        <S.List>
                            <S.NavLink to='/transactions'>
                                <S.Icon><BiTransfer /></S.Icon>
                                <S.Title>Transações</S.Title>
                            </S.NavLink>
                        </S.List>

                        <S.List>
                            <S.NavLink to='/expenses'>
                                <S.Icon><MdOutlinePayments /></S.Icon>
                                <S.Title>Despesas</S.Title>
                            </S.NavLink>
                        </S.List>

                        <S.List>
                            <S.NavLink to='/notes'>
                                <S.Icon><GoNote /></S.Icon>
                                <S.Title>Anotações</S.Title>
                            </S.NavLink>
                        </S.List>
                    </S.ListContainer>

                    <S.GitHub>
                        <S.GitHubLink
                            href="https://github.com/renovatt" target="_blank">
                            <S.Icon><BsGithub /></S.Icon>
                        </S.GitHubLink>
                    </S.GitHub>

                    <S.Linkedin>
                        <S.LinkedinLink
                            href="https://www.linkedin.com/in/renovatt/" target="_blank">
                            <S.Icon><AiFillLinkedin /></S.Icon>
                        </S.LinkedinLink>
                    </S.Linkedin>

                    <S.Logout>
                        <S.LogoutLink to='/logout'>
                            <S.Icon><RiLogoutCircleLine /></S.Icon>
                        </S.LogoutLink>
                    </S.Logout>

                    <S.Toggle
                        className={isActive ? 'active' : ''}
                        onClick={() => setIsActive(!isActive)}>
                    </S.Toggle>
                </S.Navigation>
            }
        </>
    )
}
