import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.section`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    opacity: 0;
    transform: translateX(20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }

    @media(max-width: 40rem) {
        flex-direction: column;
    }
`

export const LogoContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    @media(max-width: 40rem) {
        height: auto;
        margin-bottom: .4rem;
    }
`

export const GrowingPlant = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: growAnimation .5s ease-in-out;
    /* transform-origin: bottom center; */
    width: 150px;
    height: 150px;
    border-radius: 50%;

  @keyframes growAnimation{
    0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
  }

  @media(max-width: 40rem) {
        width: 90px;
        height: 90px;
        margin-top: 2rem;
    }
`

export const Logo = styled.img`
    object-fit: contain;
    width: 100%;
    width: 100%;
    margin-bottom: .4rem;
    filter: drop-shadow(0 0 0.75rem rgb(21, 21, 21));
`

export const Title = styled.p`
    color: var(--decoration);
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: .4rem;
    text-shadow: 2px 5px 5px var(--background-dark);

    @media(max-width: 40rem) {
        margin-bottom: .2rem;
        margin-top: .2rem;
    }
`

export const Span = styled.span`
    color: var(--text-default);
    font-size: .8rem;
    margin-top: .8rem;
    text-shadow: 2px 5px 5px var(--background-dark);

    @media(max-width: 40rem) {
        margin-bottom: .8rem;
        margin-top: .2rem;
    }
`

export const Content = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    height: 100vh;
    background: var(--background-dark);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);

    @media(max-width: 40rem) {
        width: 100%;
        margin-top: .4rem;
        border-radius: 4rem 4rem 0 0;
        box-shadow: 15px 0px 35px rgba(0, 0, 0, 0.25);
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: .4rem;
`

export const InputContainer = styled.div`
    width: 15rem;
    margin: 1rem;
    position: relative;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input`
    position: relative;
    padding: .5rem 0.625rem;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: .9rem;
    letter-spacing: .1rem;
    z-index: 2;

    &:focus ~ span,
    &:valid ~ span{
        font-size: .7rem;
        transform: translateY(-32px);
    }

    &:focus ~ i,
    &:valid ~ i{
        height: 100%;
        border: 1px solid var(--decoration);
        background: transparent;
        /* background: var(--decoration); */
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
    }
`;

export const Label = styled.span`
    position: absolute;
    left: 0;
    padding: 0.625rem 0;
    pointer-events: none;
    font-size: .8rem;
    transition: .5s;
    color: var(--decoration);
    letter-spacing: .2rem;
`

export const I = styled.i`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--decoration);
    transition: .5s;
    border-radius: 4px;
    pointer-events: none;
    z-index: 1;
`

export const Button = styled.button`
    border: none;
    height: 2rem;
    width: 15rem;
    margin: .4rem;
    font-weight: bold;
    outline: none;
    text-align: center;
    border-radius: .4rem;
    transition: all .2s;
    margin-top: .8rem;

    &:hover{
        cursor: pointer;
        color: #fff;
        background: var(--decoration);
    }
`

export const Info = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 1rem;

    svg{
        width: 1.5rem;
        height: 1.5rem;
        margin: .4rem;
        transition: all .2s;

        &:hover{
            cursor: pointer;
        }
    }
`

export const Text = styled.p`
    color: #fff;
    font-size: 1rem;
    margin-bottom: .4rem;
`

export const Login = styled(Link)`
    color: #ccc;
    font-size: .7rem;
    transition: all .2s;
    margin-top: .8rem;

    &:hover{
        cursor: pointer;
        color: var(--decoration);
    }
`