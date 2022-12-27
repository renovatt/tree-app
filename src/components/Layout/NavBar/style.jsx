import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100vh;
    width: 5rem;
    background: var(--background-dark);

    @media (max-width: 60rem) {
        position: fixed;
        bottom: 0;
        height: 5rem;
        width: 100vw;
    }
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    width: 100%;
    height: 80%;

    @media (max-width: 60rem) {
        flex-direction: row;
    }
`

export const NavLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 5rem;
    height: 5rem;
    transition: all .2s;

    &:hover{
        cursor: pointer;
        transform: scale(0.9);
        /* background: var(--background-dark-smooth); */
        }

    svg{
        height: 2rem;
        width: 2rem;
    }
`