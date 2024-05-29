import React, { useEffect } from "react";
import Home from "./Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurProducts from "./OurProducts";
import OurRecipes from "./OurRecipes";

const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/OurProducts" Component={OurProducts} />
        <Route path="/OurRecipes" Component={OurRecipes} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
