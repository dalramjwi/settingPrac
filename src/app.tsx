import React from "react";
import Minam from "./minam";
import basicData from "../static/basic-data";
const App: React.FC = () => {
  return (
    <div>
      <Minam textNode={basicData} />
      <h1>Hello</h1>
    </div>
  );
};
export default App;
