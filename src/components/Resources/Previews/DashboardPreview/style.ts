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
    position: relative;

    svg{
        position: absolute;
        top: 0;
        left: 0;
        width: 1.3rem;
        height: 1.3rem;
        color:var(--text-default);
        cursor: pointer;
        transition: .3s;

        &:hover{
            color: var(--decoration);
        }
    }

    @media(max-width: 63.96rem){
        width: 100%;
    }

    @media(max-width: 43.96rem){
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
    color: var(--text-default);
    font-size: .8rem;
`

export const Value = styled.span`
    color: var(--text-default);
    font-size: 1.2rem;
    transition: .3s;
    animation: fadeOut .3s ease-in-out forwards;

    @keyframes fadeOut {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
`