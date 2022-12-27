import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

:root{
    --background-dark: #101010;
    --background-dark-smooth:#272727;
}

body{
    /* background: #27272a; */
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
  flex-direction: column;
  min-height: calc(100vh + 10rem);
}

li {
    list-style: none;
}

a{
    text-decoration: none;
}

`
