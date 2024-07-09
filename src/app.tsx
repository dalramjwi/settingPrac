import React from "react";
import basicData from "../static/basic-data";
interface textNode {
  textNode: string;
}

const Minam: React.FC<textNode> = ({ textNode }) => {
  return <h1>{textNode}</h1>;
};
const App: React.FC = () => {
  return (
    <div>
      <Minam textNode={basicData} />
      <h1>Hello</h1>
    </div>
  );
};
export default App;
