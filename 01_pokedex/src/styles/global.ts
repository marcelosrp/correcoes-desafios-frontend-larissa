import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #00303f;
    line-height: 1.5;
    font-family: 'Caveat', cursive;
  }
`

export default GlobalStyles
