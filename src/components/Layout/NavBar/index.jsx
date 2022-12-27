import React from 'react'
import * as S from './style'
import { BsBank2 } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'
import { BiStats } from 'react-icons/bi'
import { TfiStatsUp } from 'react-icons/tfi'
import { TfiStatsDown } from 'react-icons/tfi'

export const NavBar = () => {
    return (
        <S.Container>
            <S.NavContainer>
                <S.NavLink to = '/'><BsBank2 /></S.NavLink>
                <S.NavLink to = '/transactions'><BiTransfer /></S.NavLink>
                <S.NavLink to = '/stats'><BiStats /></S.NavLink>
                {/* <S.NavLink to = '/'><TfiStatsUp /></S.NavLink>
                <S.NavLink to = '/'><TfiStatsDown /></S.NavLink> */}
            </S.NavContainer>
        </S.Container>
    )
}
