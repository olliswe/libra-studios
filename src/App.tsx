import React from "react";
import { BrowserRouter } from "react-router-dom";
import SongsContainer from "./components/SongsContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "helpers/theme";
import GlobalStyle from "components/GlobalStyle";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <SongsContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
