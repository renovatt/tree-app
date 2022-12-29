import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

:root{
    --decoration: #f9004d;
    --text-default: #fff;
    --background-white:#fff;
    --background-dark: #101010;
    --background-dark-smooth:#272727;
}



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

html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
}

body{
    background: var(--background-dark-smooth);
}

#272727,
#ef4444,
#22c55e,

.App{
  display: flex;
  min-height: 100vh;
}

.AppBody{
    position: fixed;
    min-height: 100vh;
    right: 0;
    width: 94%;
    overflow-x: hidden;

    @media (max-width: 80rem) {
        position: initial;
        width: 100%;
        height: auto;
    }
}

/* test commit  */

h1, h2, h3, h4, p {
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
