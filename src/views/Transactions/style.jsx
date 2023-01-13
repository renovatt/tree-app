import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
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
    }

    @media (max-width: 60rem) {
       margin-bottom: 8rem;
    }

    @media (max-width: 50rem) {
       margin-bottom: 10rem;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 80%;
    margin: .4rem;

    @media (max-width: 30rem) {
       margin-top: 1rem;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    color: var(--text-default);
`

export const Desc = styled.h3`
    color: var(--text-default);
    font-size: 1.3rem;

    @media (max-width: 70rem) {
        font-size: 1rem;
    }

    @media (max-width: 25rem){
        margin-bottom: 1em;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: auto;
    padding-bottom: 2em;

    @media (max-width: 80rem) {
        gap: .5rem;
        flex-wrap: wrap;
        height: auto;
    }

    @media (max-width: 25rem){
        margin-top: 1em;
    }
`

export const CalendaryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: .4rem;

    @media (max-width: 25rem){
        flex-direction: column;
        align-items: flex-start;
    }
`

export const CalendaryContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: .4rem;

    @media (max-width: 25rem){
        width: 90%;
    }
`

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  color: #6c757d;
  height: 2rem;
  width: 10rem;

  svg{
    color: #fff;
  }
`

export const LeftArrow = styled.div`
    svg{
        cursor: pointer;
        width: 1.2rem;
        height: 1.2rem;
        transition: color 0.2s ease;
        &:hover{
            color: var(--decoration);
        }
    }
`

export const RightArrow = styled.div`
    svg{
        cursor: pointer;
        width: 1.2rem;
        height: 1.2rem;
        transition: color 0.2s ease;
        &:hover{
            color: var(--decoration);
        }
}
`

export const CalendarIconWrapper = styled.div``

export const Month = styled.h5`
    color: #fff;
`

export const YearListContainer = styled.select`
    height: 2rem;
    width: 5rem;
    border: none;
    border-radius: .8rem;
    overflow-y: scroll;
    outline: none;
    font-weight: bold;
    color: var(--text-default);
    background: var(--background-dark);

    &:hover{
        cursor: pointer;
    }
`

export const YearList = styled.option`
    padding: .1rem; 
    height: 1rem;
    font-weight: bold;
    text-align: center;
    border-radius: .4rem;
    color: var(--text-default);

    &:hover{
        cursor: pointer;
    }
`