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
       margin-bottom: 8rem;
    }

    @media (max-width: 60rem) {
       margin-bottom: 35em;
    }
`

export const PreviewContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 80%;
    margin: 2rem;
    height: 10rem;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 25rem;

    @media (max-width: 60rem) {
        width: 100%;
        flex-direction: column;
    }
`

export const PrioritiesList = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 25rem;

    @media (max-width: 60rem) {
        width: 90%;
        margin-bottom: 4rem;
    }
`

export const MonthlyPayments = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 25rem;

    @media (max-width: 60rem) {
        width: 90%;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    color: var(--text-default);
`

export const SubTitle = styled.h3`
    color: var(--text-default);
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 5rem;
    margin: .8rem .4rem;
`

export const Input = styled.input`
    width: 15rem;
    height: 2rem;
    outline: none;
    border: none;
    text-align: start;
    background: transparent;
    color: #fff;
    border-bottom: 1px solid #fff;

    @media (max-width: 40rem) {
        width: 10rem;
    }
`

export const InputNumber= styled.input`
    width: 5rem;
    height: 2rem;
    outline: none;
    border: none;
    text-align: start;
    background: transparent;
    color: #fff;
    border-bottom: 1px solid #fff;
`

export const Add = styled.button`
    width: 5rem;
    height: 2rem;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: .4rem;
    color: var(--text-default);
    background: var(--background-dark);
    transition: all .2s;

    &:hover{
        cursor: pointer;
        color: var(--background-dark);
        background: var(--background-white);
    }

    @media (max-width: 70rem) {
       width: 3rem;
       font-size: .8rem;
    }
`

export const ListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    width: 100%;
    min-height: 21.3rem;
    height: auto;
    padding: .4rem;
    margin: .2rem 0;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 6px;
    }
    ::-webkit-scrollbar-track{
        background-color: var(--background-dark-smooth);
        border-radius: .4rem;
    }
    ::-webkit-scrollbar-thumb{
        background: var(--background-dark);
        border-radius: .4rem;
    }
`

export const Lists = styled.span`
    width: 95%;
    height: 4rem;
    border-radius: .4rem;
    margin: .1rem;
    padding: 1rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-default);
    background: var(--background-dark);
`

export const Items = styled.span`
    min-width: 5rem;
`

export const Delete = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;

    svg{
        color: var(--text-default);
        width: 1.5rem;
        height: 1.5rem;
        transition: all .2s;
    }

    &:hover svg{
        color: var(--decoration);
        cursor: pointer;
    }
`