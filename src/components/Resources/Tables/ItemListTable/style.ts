import styled from "styled-components"

export const Container = styled.div`
    width: 95%;
    height: 4rem;
    border-radius: .4rem;
    margin: .1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-dark);
    /* box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25); */

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

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: auto; //
    padding-left: .8rem;
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
        color: #000;
    }
`

export const Resume = styled.h3`
    text-align: start;
    color: var(--text-default);
    font-size: .8rem;
    width: 100%;

    &::first-letter {
        text-transform: uppercase;
    }
`

export const ContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 4rem;
    padding-right: .8rem;
`

export const Date = styled.span`
    text-align: end;
    color: var(--text-smooth);
    font-size: .6rem;
    font-weight: bold;
    width: auto;

    &::first-letter {
            text-transform: uppercase;
        }

    @media (max-width: 29rem) {
        font-size: .5rem;
    }
`

export const Amount = styled.h3`
text-align: end;
color: var(--text-default);
color: ${(props)=> props.color};
font-size: 1.5rem;
width: 10rem;

@media (max-width: 29rem) {
        font-size: 1rem;
    }
`