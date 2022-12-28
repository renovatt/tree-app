import styled from "styled-components";

export const Container = styled.div`  
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 20.9rem;
    width: 88.9%;
    border-radius: .4rem;
    background-color: #272727;
`

export const Table = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column-reverse;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 95%;

    ::-webkit-scrollbar{
        width: 6px;
    }
    ::-webkit-scrollbar-track{
        background-color: #27272a;
        border-radius: .4rem;
    }
    ::-webkit-scrollbar-thumb{
        background: #101010;
        border-radius: .4rem;
    }
`

export const ImageContainer = styled.div`
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
`

export const Desc = styled.p`
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
`