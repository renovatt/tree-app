import styled from "styled-components"

export const Container = styled.div`
    width: 95%;
    border-radius: .4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-dark);

    opacity: 0;
    transform: translateX(20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
    
    &:hover{
        cursor: pointer;
    }
`

export const Lists = styled.span`
    width: 100%;
    height: 3rem;
    border-radius: .4rem;
    margin: .1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-default);
    background: var(--background-dark-shadow);
`

export const Resume = styled.h4`
    min-width: 5rem;
    
    &::first-letter {
        text-transform: uppercase;
    }
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    background: ${(props) => props.color};
    border-radius: 50%;
    margin: .4rem;

    svg{
        width: 2rem;
        height: 2rem;
        padding: .4rem;
        color: var(--background-dark);
    }
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