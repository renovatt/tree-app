import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .4rem;
`

export const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 20rem;
    height: 5rem;
    min-width: 8rem;
    border-radius: .8rem;
    padding: .4rem;
    background: var(--background-dark);

    @media (max-width: 70rem) {
        width: 10rem;
        height: 5rem;
    }

    @media (max-width: 60rem) {
        height: 5rem;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.p`
    color: #fff;
    font-size: 1rem;
    padding: .4rem;

    @media (max-width: 70rem) {
        font-size: .8rem;
    }
`

export const Value = styled.span`
    color: #fff;
    font-size: 1.5rem;
    padding: .4rem;

    @media (max-width: 70rem) {
        font-size: 1rem;
    }

    svg{
        width: 1.5rem;
        height: 1.5rem;
    }
`