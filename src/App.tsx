import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SongsContainer from "./components/SongsContainer";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "helpers/theme";
import GlobalStyle from "components/GlobalStyle";
import { QueryParamProvider } from "use-query-params";
import { items } from "helpers/items";
import Home from "components/Home";

const EmptyImage = styled.div`
  display: none;
  height: 0;
  width: 0;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/music"} component={SongsContainer} />
            <Redirect to={"/music"} />
          </Switch>
        </QueryParamProvider>
      </BrowserRouter>
      {items.map((item, index) => (
        <EmptyImage key={index} style={{ backgroundImage: item.css }} />
      ))}
    </ThemeProvider>
  );
};

export default App;
