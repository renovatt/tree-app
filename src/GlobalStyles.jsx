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

body{
    background: var(--background-dark-smooth);
}

#272727,
#ef4444,
#22c55e,

.App{
  display: flex;
  /* min-height: 100vh; */

  @media (max-width: 70rem) {
        height: auto;
    }
}

.AppBody{
    position: fixed;
    min-height: 100vh;
    right: 0;
    width: 94%;

    @media (max-width: 70rem) {
        width: 100%;
        height: auto;
    }
}

li {
    list-style: none;
}

a{
    text-decoration: none;
}

`
