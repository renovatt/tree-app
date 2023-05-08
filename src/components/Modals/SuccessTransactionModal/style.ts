import styled from "styled-components";

export const ModalContainer = styled.section`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4rem;
    z-index: 999;
    width: 100%;
    background: transparent;

    @media(max-width: 60rem) {
        width: 60%;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;   
    height: 4em;
    width: 22rem;
    margin: 0;
    padding: .4rem;
    border-radius: .4rem;
    padding: 0 .8rem;
    border: 1px solid #22c55e;
    backdrop-filter: blur(20px);
    background: rgba(51, 42, 42, 0.064);

    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    background: #22c55e;
    border-radius: 50%;
    margin: .4rem;

    svg{
        width: 2rem;
        height: 2rem;
        padding: .4rem;
        color: #116631;

        @media(max-width: 60rem) {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`

export const Title = styled.p`
    font-size: .9rem;
    margin: .4rem;
    padding: .4rem;
    color: #22c55e;

    @media(max-width: 60rem) {
        font-size: .7rem;
    }
`