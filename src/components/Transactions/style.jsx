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
        height: auto;
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
export const ListContainer = styled.ul`
    padding: .4rem;
    height: 5rem;
    overflow-y: scroll;
`

export const MonthList = styled.li`
    padding: .4rem; 
   

    &:hover{
        cursor: pointer;
        background: #fff;
    }
`