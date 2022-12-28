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
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 80%;
    margin: .4rem;
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

    @media (max-width: 60rem) {
        flex-direction: column;
    }
`

export const PreviewCash = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 30rem;
    height: 10rem;
    border-radius: .4rem;
    background: var(--background-dark);

    @media (max-width: 60rem) {
        width: 100%;
    }
`

export const PreviewGraph = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: var(--background-dark);

    @media (max-width: 60rem) {
        display: none;
    }
`

export const PreviewGraphBar = styled.div`
    display: none;
    width: 30rem;
    height: 3rem;
    margin: .4rem;
    border-radius: .4rem;
    background: var(--background-dark);

    @media (max-width: 60rem) {
        display: flex;
        width: 100%;
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



