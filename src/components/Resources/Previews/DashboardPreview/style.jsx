import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: .4rem;
`

export const Card = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 20rem;
    height: 8rem;
    min-width: 8rem;
    min-height: 3rem;
    border-radius: .4rem;

    svg{
        width: 2.5rem;
        height: 2.5rem;
        color:#fff;
    }

    @media(max-width: 63.96rem){
        width: 10rem;
    }

    @media(max-width: 43.96rem){
        height: 3rem;
        margin: .4rem;

        svg{
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    color: #fff;
    font-size: .8rem;
`

export const Value = styled.span`
    color: #fff;
    font-size: 1.2rem;
`