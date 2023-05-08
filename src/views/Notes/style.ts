import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: var(--background-dark-smooth);

    opacity: 0;
    transform: translateX(20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }

    @media (max-width: 70rem) {
       margin-bottom: 5rem;
       justify-content: center;
       height: auto;
    }
`
export const PreviewContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 80%;
    margin: 2rem;
    /* height: 8.5rem; */
`

export const Title = styled.h1`
    font-size: 1.5rem;
    color: var(--text-default);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 25rem;
    height: auto;

    @media (max-width: 80rem) {
        width: 100%;
        flex-direction: column;
    }
`