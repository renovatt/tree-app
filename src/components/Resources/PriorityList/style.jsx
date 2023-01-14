import styled from "styled-components";

export const Container = styled.div`
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

export const PrioritiesList = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    max-height: 28rem;
`

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 8rem;
    margin-bottom: .4rem;
    border-radius: .4rem;
    padding: .8rem 0;
    background: var(--background-dark);

    @media (max-width: 45rem) {
       height: auto;
       padding: 1rem;
    }
`

export const SubTitle = styled.h4`
    color: var(--text-default);
    padding: .2rem .8rem;
    margin-bottom: 2rem;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: auto;

    @media (max-width: 45rem) {
       flex-direction: column;
    }
`

export const Input = styled.input`
    width: 15rem;
    height: 2rem;
    outline: none;
    border: none;
    text-align: center;
    background: transparent;
    color: var(--text-default);
    transition: .3s;
    border-bottom: 1px solid var(--text-default);

    &:focus{
        border-bottom: 1px solid var(--decoration);
    }
`

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-dark);
    border-radius: .4rem;
    width: auto;
    height: 2rem;

    @media (max-width: 45rem) {
       margin: 1rem;
    }
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-width: 4rem;
    border-radius: .4rem;
    position: relative;
    margin: .4rem;
    padding: .4rem;
    border: 1px solid var(--background-dark-smooth);
`

export const Span = styled.span`
    position: absolute;
    z-index: 2;
    top: .4rem;
    left: 0;
    text-align: center;
    width: 100%;
    font-size: .9rem;
    font-weight: bold;
    pointer-events: none;
    color: var(--background-dark-smooth);
`

export const ToogleInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: .4rem;
    appearance: none;
    transition: .3s;
    position: absolute;
    cursor: pointer;

    &.min{
        &:checked{
            background: #22c55e;
        }
    }
    
    &.medium{
        &:checked{
            background: #e89611;
        }
    }

    &.max{
        &:checked{
            background: #ef4444;
        }
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