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
       margin-bottom: 2rem;
    }

    @media (max-width: 60rem) {
       margin-bottom: 30em;
    }
`

export const PreviewContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 80%;
    margin: 2rem;
    height: 8rem;
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
    height: 25rem;
    padding: .4rem;

    @media (max-width: 60rem) {
        width: 100%;
        flex-direction: column;
    }
`

export const MonthlyPayments = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 25rem;

    @media (max-width: 60rem) {
        width: 90%;
        margin-bottom: 2rem;
    }
`

export const PrioritiesList = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 25rem;

    @media (max-width: 60rem) {
        width: 90%;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 5rem;
    margin-bottom: .4rem;
    border-radius: .4rem;
    padding: .8rem 0;
    background: var(--background-dark);
`

export const SubTitle = styled.h4`
    color: var(--text-default);
    padding: .2rem .8rem;
`

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: auto;
`

export const Input = styled.input`
    width: 10rem;
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
    height: 1.5rem;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: .4rem;
    color: var(--background-dark);
    background: var(--background-white);
    transition: all .2s;

    &:hover{
        cursor: pointer;
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
    min-height: 10rem;
    height: auto;
    padding: .4rem;
    margin: .2rem 0;
    border-radius: .4rem;
    overflow-y: scroll;
    background: var(--background-dark);

    ::-webkit-scrollbar{
        width: 6px;
    }
    ::-webkit-scrollbar-track{
        background-color: var(--background-dark-smooth);
        border-radius: .4rem;
    }
    ::-webkit-scrollbar-thumb{
        background: var(--background-dark-smooth);
        border-radius: .4rem;
    }
`

export const Lists = styled.span`
    width: 95%;
    height: 3rem;
    border-radius: .4rem;
    margin: .1rem;
    padding: 1rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-default);
    background: var(--background-dark-shadow);
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
        width: 1.3rem;
        height: 1.3rem;
        transition: all .2s;
    }

    &:hover svg{
        color: var(--decoration);
        cursor: pointer;
    }
`