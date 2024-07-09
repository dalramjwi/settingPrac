import React from "react";
interface textNode {
  textNode: string;
}

const Minam: React.FC<textNode> = ({ textNode }) => {
  return <h1>{textNode}</h1>;
};
const App: React.FC = () => {
  return (
    <div>
      <Minam textNode="아무나" />
      <h1>Hello</h1>
    </div>
  );
};
export default App;
