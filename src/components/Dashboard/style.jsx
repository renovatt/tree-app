import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    /* justify-content: center; */
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
`

export const PreviewCash = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 30rem;
    height: 10rem;
    border-radius: .4rem;
    background: var(--background-dark);
`

export const PreviewGraph = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: var(--background-dark);
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



