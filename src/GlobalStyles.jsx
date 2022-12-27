import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

:root{
    --text-default: #fff;
    --background-white:#fff;
    --background-dark: #101010;
    --background-dark-smooth:#272727;
}

body{
    background: var(--background-dark-smooth);
}

#1a1138,
#33216d,
#3a267d,
#5e3eca,

#27272a,
#ef4444,
#22c55e,




.App{
  display: flex;
  min-height: calc(100vh + 10rem);
}

.AppBody{
    position: fixed;
    min-height: 100vh;
    /* display: flex;
    flex-direction: column; */
    right: 0;
    width: 94%;

    @media (max-width: 70rem) {
        width: 100%;
    }
}

li {
    list-style: none;
}

a{
    text-decoration: none;
}

`
