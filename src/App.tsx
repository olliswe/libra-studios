import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import SongsContainer from "./components/SongsContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "helpers/theme";
import GlobalStyle from "components/GlobalStyle";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
          <Route path={'/music'} component={SongsContainer}/>
          <Redirect to={'/music'}/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
