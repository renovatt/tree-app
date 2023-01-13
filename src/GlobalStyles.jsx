import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root{
    --decoration: #f9004d;
    --text-default: #fff;
    --text-smooth: #ccc;
    --background-white:#fff;
    --background-dark: #101010;
    --background-dark-smooth:#272727;
    --background-dark-shadow:#1d1d1d;
}

::-webkit-scrollbar{
    width: 6px;
}
::-webkit-scrollbar-track{
    background-color: var(--background-dark-smooth);
    border-radius: .4rem;
}
::-webkit-scrollbar-thumb{
    background: var(--background-dark);
    border-radius: .4rem;
}

html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
}

body{
    background: var(--background-dark-smooth);
}

.App{
  display: flex;
  min-height: 100vh;
}

.AppBody{
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

a{
    text-decoration: none;
}
`
