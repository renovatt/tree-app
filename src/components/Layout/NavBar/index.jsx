import React from 'react'
import * as S from './style'
import { BsBank2 } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'
import { BiStats } from 'react-icons/bi'
import { GoNote } from 'react-icons/go'

export const NavBar = () => {
    return (
        <S.Container>
            <S.NavContainer>
                <S.NavLink to = '/'><BsBank2 /></S.NavLink>
                <S.NavLink to = '/transactions'><BiTransfer /></S.NavLink>
                <S.NavLink to = '/stats'><BiStats /></S.NavLink>
                <S.NavLink to = '/notes'><GoNote /></S.NavLink>
            </S.NavContainer>
        </S.Container>
    )
}
