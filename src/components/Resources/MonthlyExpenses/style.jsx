import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: .4rem;
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
    
    @media (max-width: 80rem) {
        width: 90%;
    }
`

export const MonthlyPayments = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    max-height: 26rem;
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

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: auto;
`

export const Input = styled.input`
    width: 15rem;
    height: 2rem;
    outline: none;
    border: none;
    text-align: center;
    background: transparent;
    color: var(--text-default);
    border-bottom: 1px solid var(--text-default);
    transition: .3s;

    @media (max-width: 40rem) {
        width: 9rem;
    }

    &:focus{
        border-bottom: 1px solid var(--decoration);
    }
`

export const InputNumber= styled.input`
    width: 5rem;
    height: 2rem;
    outline: none;
    border: none;
    text-align: center;
    background: transparent;
    color: var(--text-default);
    border-bottom: 1px solid var(--text-default);
    transition: .3s;

    &:focus{
        border-bottom: 1px solid var(--decoration);
    }
`

export const Add = styled.button`
    width: 5rem;
    min-width: 4rem;
    height: 2rem;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: .4rem;
    color: var(--background-dark);
    background: var(--background-white);
    transition: all .2s;

    &:hover{
        cursor: pointer;
        background: var(--decoration);
    }

    @media (max-width: 70rem) {
       width: 3rem;
       font-size: .8rem;
    }
`

export const ListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column-reverse;
    width: 100%;
    min-height: 4rem;
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
        background-color: var(--background-dark);
        border-radius: .4rem;
    }
    ::-webkit-scrollbar-thumb{
        /* background: var(--background-dark-smooth); */
        border-radius: .4rem;
    }
`