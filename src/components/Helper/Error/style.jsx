import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    opacity: 0;
    transform: translateX(20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
`

export const Image = styled.img`
    width: 300px;
    height:300px;
    object-fit: contain;
    opacity: 0;
    transition: all .2s;
`

export const Desc = styled.p`
    color: #fff;
    font-size: 1rem;
`