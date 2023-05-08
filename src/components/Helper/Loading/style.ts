import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    transform: translateX(20px);
    animation: fade .3s forwards;
    position: relative;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
`

export const Spinner = styled.span`
    width: 40px;
    height: 40px;
    border: 4px solid var(--decoration);
    border-top-color: #333;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`