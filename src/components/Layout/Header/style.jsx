import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 80%;
    margin: .4rem;

    @media (max-width: 65.5rem) {
       margin-bottom: 2rem;
       margin-top: 2rem;
    }
`

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid #fff;
    font-size: 1.3rem;
    color: var(--text-default);
    background: var(--background-dark);
`

export const Logo = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 50%;
    
    &:hover{
        cursor: pointer;
    }
`

export const LetterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    
    &:hover{
        cursor: pointer;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    color: var(--text-default);
`