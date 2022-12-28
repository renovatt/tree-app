import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
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
    min-height: 3rem;
    border-radius: .8rem;
    padding: .4rem;
    background: var(--background-dark);

    @media (max-width: 60rem) {
        width: 15rem;
    }
`

export const Content = styled.div`
    display: flex;
`

export const Text = styled.p`
    color: #fff;
    font-size: 1rem;
    padding: .4rem;
`

export const Value = styled.span`
    color: #fff;
    font-size: 2rem;
    padding: .4rem;

    @media (max-width: 70rem) {
        font-size: 1.5rem;
    }

    svg{
        width: 1.5rem;
        height: 1.5rem;
    }
`