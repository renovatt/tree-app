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

export const ModalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 70%;
    border-radius: .4rem;
    
    @media(max-width: 70rem) {
        width: 100%;
        height: auto;
        margin-top: -5rem;
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 25em;
    width: 40%;
    margin: 0;
    padding: .4rem;
    border-radius: .4rem;
    padding: 0 .8rem;
    backdrop-filter: blur(20px);
    background: rgba(51, 42, 42, 0.064);
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }

    @media(max-width: 60rem) {
        width: 90%;
    }
`

export const IconClose = styled.div`
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
`

export const ValuePreview = styled.input`
    height: 3rem;
    width: 100%;
    text-align: start;
    font-size: 1.3rem;
    border: transparent;
    outline: none;
    border-radius: .4rem;
    margin: .4rem;
    padding: .4rem;
    color: var(--text-default);
    background: var(--background-dark);
    transition: .3s;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);

    &:focus{
        border: 1px solid var(--decoration);
    }
`

export const FormContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const TitleTransaction = styled.input`
    height: 3rem;
    width: 50%;
    text-align: start;
    font-size: 1.3rem;
    border: none;
    outline: none;
    margin: .4rem;
    padding: .4rem;
    color: var(--text-default);
    border-bottom: 1px solid var(--text-default);
    background: transparent;
    transition: .3s;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);

    &:focus{
        border-bottom: 1px solid var(--decoration);
    }
`

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--background-dark);
    border-radius: .4rem;
    width: 50%;
    height: 3rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    border-radius: .4rem;
    position: relative;

    svg{
        position: absolute;
        z-index: 2;
        width: 2rem;
        height: 2rem;
        pointer-events: none;
        color: var(--text-default);
        filter: drop-shadow(2px 1px 5px var(--background-dark));
    }
`

export const ToogleInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: .4rem;
    appearance: none;
    transition: .3s;
    position: relative;
    cursor: pointer;

    &.earn{
        &:checked{
            background: #22c55e;
        }
    }
    
    &.spent{
        &:checked{
            background: #ef4444;
        }
    }
`

export const Add = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    border: none;
    margin: .4rem;
    outline: none;
    transition: .2s;
    font-weight: bold;
    border-radius: .4rem;
    color: var(--decoration);
    background: var(--background-white);

    &:hover{
        cursor: pointer;
        color: var(--text-default);
        background: var(--decoration);
    }
`

