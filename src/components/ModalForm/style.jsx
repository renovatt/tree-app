import styled from "styled-components";

export const ModalContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .8);

    @media(max-width: 60rem) {
        overflow-y: auto;
    }
`

export const ModalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 70%;
    border-radius: .4rem;
    
    @media(max-width: 70rem) {
        height: auto;
        padding: .8rem .4rem;
    }
    @media(max-width: 60rem) {
        flex-direction: column;
        margin-top: 35rem;
        margin-bottom: 5rem;
    }
`

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
   
    flex-direction: column;
    height: 25em;
    width: 50%;
    padding: .4rem;
    border-radius: .4rem;
    padding: 0 .8rem;
    background: #191919;
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    svg {
        top: -10px;
        right: -1rem;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #fff;
        transition: .2s;
        position: absolute;

        &:hover{
            cursor: pointer;
        }
    }

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
`

export const Value = styled.input`
    height: 3rem;
    width: 100%;
    text-align: start;
    font-size: 1.3rem;
    border: none;
    outline: none;
    border-radius: .4rem;
    margin: .4rem;
    padding: .4rem;
    color: #fff;
    background: #474444da;
`

export const FormContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Title = styled.input`
    height: 3rem;
    width: 50%;
    text-align: start;
    font-size: 1.3rem;
    border: none;
    outline: none;
    margin: .4rem;
    padding: .4rem;
    color: #fff;
    border-bottom: 1px solid #fff;
    background: transparent;
`

export const Select = styled.select`
    height: 3rem;
    width: 50%;
    text-align: center;
    border: none;
    outline: none;
    border-radius: .4rem;
    margin: .4rem;
    color: #fff;
    background: #101010;

    &:hover{
        cursor: pointer;
    }
`

export const Option = styled.option`
    color: #fff;
    background: #101010;
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
    color: #fff;
    border-radius: .4rem;
    background: #101010;

    &:hover{
        cursor: pointer;
        color: #fff;
        background: #474444da;
    }
`

