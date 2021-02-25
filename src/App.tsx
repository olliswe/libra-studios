import React from "react";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import SongsContainer from "./components/SongsContainer";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "helpers/theme";
import GlobalStyle from "components/GlobalStyle";
import { QueryParamProvider } from "use-query-params";
import { items } from "helpers/items";
import Home from "components/Home";
import { animated, useTransition } from "react-spring";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const trackingId = "UA-151060636-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const EmptyImage = styled.div`
  height: 0;
  width: 0;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <MainRouter />
        </QueryParamProvider>
      </Router>
      {items.map((item, index) => (
        <>
          <EmptyImage key={index} style={{ backgroundImage: item.css }} />
          <EmptyImage key={index} style={{ backgroundImage: item.nameImg }} />
        </>
      ))}
    </ThemeProvider>
  );
};

const MainRouter = () => {
  const location = useLocation();

  const transition = useTransition(location, {
    keys: (location: any) => location.pathname,
    from: { opacity: 0, config: { duration: 1000 } },
    enter: { opacity: 1, config: { duration: 1000 } },
    leave: { opacity: 0, config: { duration: 1000 } },
  });

  return (
    <>
      {transition((style, item, t, i) => {
        return (
          <animated.div key={i} style={style as any}>
            <Switch location={item}>
              <Route path={"/music"} component={SongsContainer} />
              <Route path={"/"} component={Home} />
            </Switch>
          </animated.div>
        );
      })}
    </>
  );
};

export default App;
