import React from "react";
import ImageSlider from "./components/ImageSlider";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ImageSlider />
    </BrowserRouter>
  );
};

export default App;
