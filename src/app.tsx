import React from "react";
import Minam from "./minam";
import basicData from "./static/basic-data";
import Ul from "./ul";
import Li from "./li";
import arr from "./static/array-data";
import Bin from "./bin";
let styles: React.CSSProperties = {
  color: "white",
  backgroundColor: "black",
  fontSize: "48px",
};
const App: React.FC = () => {
  return (
    <div>
      <Minam textNode={basicData} />
      <h1>Hello</h1>
      <Bin h1TextNode={basicData} styles={styles} />
      <Ul>
        {arr.map((item, index) => (
          <Li key={index} textNode={item} />
        ))}
      </Ul>
    </div>
  );
};
export default App;
