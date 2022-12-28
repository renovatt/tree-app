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

    @media (max-width: 60rem) {
       margin-bottom: 8em;
    }

    @media (max-width: 50rem) {
       margin-bottom: 15em;
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

export const CalendaryContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: .4rem;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 10rem;

    @media (max-width: 80rem) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 2rem;
        padding: 2rem;
        width: 100%;
        height: auto;
    }
`
export const MonthListContainer = styled.select`
    height: 2rem;
    width: 10rem;
    border: none;
    border-radius: .8rem;
    overflow-y: scroll;
    outline: none;
    font-weight: bold;
    color: var(--text-default);
    background: var(--background-dark);

    &:hover{
        cursor: pointer;
    }
`

export const MonthList = styled.option`
    padding: 1rem; 
    font-weight: bold;
    text-align: center;
    border-radius: .4rem;
    color: var(--text-default);

    &:hover{
        cursor: pointer;
    }
`