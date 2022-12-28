import styled from "styled-components";

export const Container = styled.div`  
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 25.2rem;
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