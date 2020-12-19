import React from "react";
import { BrowserRouter } from "react-router-dom";
import SongsContainer from "./components/SongsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <SongsContainer />
    </BrowserRouter>
  );
};

export default App;
