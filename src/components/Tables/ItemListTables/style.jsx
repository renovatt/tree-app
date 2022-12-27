import styled from "styled-components"

export const Container = styled.div`
width: 95%;
height: 4rem;
border-radius: .4rem;
margin: .1rem;

display: flex;
align-items: center;
justify-content: space-between;
background: #101010;
`

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 8rem;
    padding-left: .8rem;
`

export const Icon = styled.div`
display: flex;
justify-content: center;
text-align: center;
background: ${(props) => props.color};
border-radius: 50%;
margin: .4rem;

svg{
    width: 2rem;
    height: 2rem;
    padding: .4rem;
    color: #000;
}
`

export const Item = styled.h3`
text-align: start;
color: #fff;
font-size: .8rem;
width: 10rem;
`

export const ContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 4rem;
    padding-right: .8rem;
`

export const Date = styled.span`
text-align: end;
color: #ccc;
font-size: .6rem;
font-weight: bold;
width: 10rem;
`

export const Amount = styled.h3`
text-align: end;
color: #fff;
color: ${(props)=> props.color};
font-size: 1.5rem;
width: 10rem;
`