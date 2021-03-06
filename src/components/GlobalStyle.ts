import { createGlobalStyle } from "styled-components";
import { theme } from "helpers/theme";

const GlobalStyle = createGlobalStyle`


* {
  box-sizing: border-box;
}


html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
  sans-serif;
  background: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  
  ${theme.media.phone}{
  position:fixed
  }
}

#root {
  margin: 0;
  padding: 0;
  width: 100vw;
  height:100vh;
  display: flex;
  align-items: center;
}
    `;

export default GlobalStyle;
