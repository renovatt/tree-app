import styled from "styled-components";

export const ModalContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .8);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;   
    flex-direction: column;
    height: 10em;
    width: 17rem;
    margin: 0;
    padding: .4rem;
    border-radius: .4rem;
    padding: 0 .8rem;
    backdrop-filter: blur(20px);
    background: rgba(51, 42, 42, 0.064);

    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    svg {
        top: -10px;
        right: -1rem;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: var(--background-white);
        transition: .2s;
        position: absolute;

        &:hover{
            cursor: pointer;
            background: var(--decoration);
        }
    }

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
`

export const Title = styled.p`
    font-size: .9rem;
    margin: .4rem;
    padding: .4rem;
    color: var(--decoration);
`

export const Add = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    font-weight: bold;
    border: none;
    margin: .4rem;
    outline: none;
    transition: .2s;
    color: var(--text-default);
    border-radius: .4rem;
    background: #101010;

    &:hover{
        cursor: pointer;
        color: var(--text-default);
        background: var(--decoration);
    }
`

