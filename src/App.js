import React from "react";

import RenderComponents from "./components";
import components from "./componentsTest.json";
import { Header } from "./Header";

const App = () => (
  <>
    <Header />
    <RenderComponents components={components} />
  </>
);
export default App;
