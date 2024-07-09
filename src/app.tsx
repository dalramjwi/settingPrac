import React from "react";
import Minam from "./minam";
import basicData from "./static/basic-data";
import Ul from "./ul";
import Li from "./li";
const App: React.FC = () => {
  return (
    <div>
      <Minam textNode={basicData} />
      <h1>Hello</h1>
      <Ul textNode={<Li textNode={basicData} />} />
    </div>
  );
};
export default App;
