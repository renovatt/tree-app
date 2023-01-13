import styled from "styled-components";

export const Container = styled.section`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: #191919 ;
    width: 15rem;
    height: 8rem;
    margin-top: 12rem;
    margin-right: 12rem;
    border-radius: .4rem;
    z-index: 888;
    opacity: 0;
    transform: translateX(20px);
    animation: fade .3s forwards;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #5a5a5a;
`

export const UserImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    margin: .6rem;
    font-size: 1.3rem;
    border-radius: 50%;
    border: 1px solid var(--text-default);
    color: var(--text-default);
    background: var(--background-dark);
`

export const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    background: var(--background-white);
    border-radius: 50%;

    &:hover{
        cursor: pointer;
    }
`

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: auto;
    height: 2rem;
`

export const UserName = styled.p`
    text-transform: capitalize;
    font-weight: bold;
    font-size: .8rem;
`

export const UserEmail = styled.p`
    font-weight: bold;
    font-size: .8rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 50%;
    position: relative;

    svg{
        margin: .6rem;
        z-index: 2;
    }
`

export const Button = styled.button`
    font-size: .9rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: .4rem;
    background: none;
    color: var(--text-default);
    transition: .3s;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;

    &:hover{
        cursor: pointer;
        background: var(--background-dark-shadow);
    }
`