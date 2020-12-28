import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import SongsContainer from "./components/SongsContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "helpers/theme";
import GlobalStyle from "components/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import { QueryParamProvider } from "use-query-params";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Route path={"/music"} component={SongsContainer} />
          <Redirect to={"/music"} />
        </QueryParamProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
