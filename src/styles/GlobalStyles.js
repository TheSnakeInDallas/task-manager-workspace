import { createGlobalStyle } from "styled-components";

  const GlobalStyles = createGlobalStyle`

  /* @font-face {
    font-family: 'Poppins';
    src: url('../fonts/Poppins-Bold.ttf');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('../fonts/Poppins-Regular.ttf');
    font-weight: 400;
  } */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
  }

  /* html {
	font-family: 'Poppins', sans-serif;
  } */

  body {
    background: #191d20;
    display: flex;
    justify-content: center;
  }

  h1 {
	color: #fff;
  	margin-bottom: 0.5rem;
  	font-size: 1.75rem;
  }

  h2 {
  	color: #fff;
  	margin-bottom: 0.5rem;
  	font-size: 1.75rem;
  	text-align: center;
  }

`;

export default GlobalStyles;