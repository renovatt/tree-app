import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: var(--background-dark-smooth);

    opacity: 0;
    transform: translateX(20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }

    @media (max-width: 70rem) {
       margin-bottom: 5rem;
    }

    @media (max-width: 65.5rem) {
       margin-bottom: 10rem;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 80%;
    margin: .4rem;

    @media (max-width: 65.5rem) {
       margin-bottom: 2rem;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    color: var(--text-default);
`

export const Desc = styled.h3`
    color: var(--text-default);
    font-size: 1.3rem;

    @media (max-width: 70rem) {
        font-size: 1rem;
    }
`

export const HeaderDash = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: .8rem;
`

export const Logo = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid #fff;
    font-size: 1.3rem;
    color: var(--text-default);
    background: var(--background-dark);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 10rem;
    margin: .4rem;

    @media (max-width: 65.5rem) {
        flex-direction: column;
        height: auto;
    }
`

export const CashPreview = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 30rem;
    height: 10rem;
    border-radius: .4rem;
    background: var(--background-dark);

    @media (max-width: 65.5rem) {
        width: 100%;
    }
`

export const PreviewGraphBarY  = styled.div`
    width: 25rem;
    height: 10rem;
    padding: .4rem;
    border-radius: .4rem;
    overflow: hidden;
    background: var(--background-dark);

    @media (max-width: 80rem) {
        width: 22rem;
    }

    @media (max-width: 65.5rem) {
        display: none;
    }
`

export const PreviewGraphBarX = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 10rem;
    margin: .4rem;
    border-radius: .4rem;
    background: var(--background-dark);

    @media (max-width: 65.5rem) {
        display: flex;
    }
`

export const Add = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin: .8rem;
    border-radius: 50%;
    border: 1px solid #fff;
    font-size: 1.3rem;
    transition: all .2s;
    color: var(--text-default);
    background: var(--background-dark);

    &:hover{
        cursor: pointer;
        color: #000;
        background: var(--background-white);
    }
`



